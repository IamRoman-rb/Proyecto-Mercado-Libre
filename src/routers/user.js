const express = require("express");
const validRegister = require("../middlewares/validRegister");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/login", userController.login);  //se utiliza la constante userController para utilizar la ruta
router.get("/register", userController.register);

router.post("/save", [validRegister], userController.save)//se encarga de guardar usuarios
router.post("/access", [], userController.access)//se encarga de loguear usuarios

module.exports = router;
