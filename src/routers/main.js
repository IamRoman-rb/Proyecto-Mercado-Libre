const express = require("express");
const app = express.Router();
const path = require("path");

const controlador = require("../controllers/mainController")

//Websites Routes
app.get("/", controlador.index);
app.get("/login", controlador.login);
app.get("/sing-up", controlador.singUp);

module.exports = app;