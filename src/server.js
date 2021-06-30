const express = require("express");
const app = express();
const path = require("path");

//Server
app.listen(3000, () => console.log("Server Start", "http://localhost:3000"));

//Public Access
app.use(express.static("../public"));

//Websites Routes Requires
const web = require("./routers/web");
app.use(web);
