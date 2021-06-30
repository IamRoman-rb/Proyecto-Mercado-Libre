const express = require("express");
const app = express.Router();
const path = require("path");

//Websites Roeutes
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../views", "index.html"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../views", "login.html"));
});
app.get("/sing-up", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../views", "sing-up.html"));
});


module.exports = app;
