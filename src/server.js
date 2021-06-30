const express = require("express");
const app = express();
const path = require("path");

//Server
app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo en el puerto 3000")
})

//Public Access
app.use(express.static(path.resolve(__dirname,"../public")));

//Websites Routes Requires
const web = require("./routers/web");
app.use(web);
