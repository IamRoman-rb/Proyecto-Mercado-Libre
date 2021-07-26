const express = require("express");
const app = express();
const path = require("path");

//Server
app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo en el puerto 3000")
})

//Public Access
app.use(express.static(path.resolve(__dirname,"../public")));

//app settings
app.set("view engine","ejs")
app.set('views', path.resolve(__dirname, "./views")); 

//Websites Routes Requires
const main = require("./routers/main");
app.use(main);
const product = require("./routers/productos");
app.use(product);