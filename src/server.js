const express = require("express");
const path = require("path");
const session = require("express-session");
const cookie = require("cookie-parser");
const method = require("method-override");
const app = express();


//Server
app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo en el puerto 3000")
})

//Public Access
app.use(express.static(path.resolve(__dirname,"../public")));

//App Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(method("_method"))
app.use(cookie());
app.use(session({
    secret: "Iamroman_ok",
    resave: true,
    saveUninitialized: true
}));

//Middlewares Customs
// app.use(require("./middleware/styles"));
app.use(require("./middlewares/user"));

//app settings
app.set("view engine","ejs")
app.set('views', path.resolve(__dirname, "./views")); 

//Websites Routes Requires
const main = require("./routers/main");
app.use(main);
const product = require("./routers/productos");
app.use(product);
const user = require("./routers/user");
app.use(user);


// En App requerimos las rutas, 
//en cada ruta, se requiere su controlador, en cada controlador se require su modelo, 
//y los middlewares es lo que va en el medio antes de llegar al controlador