const express = require("express");
const validRegister = require("../middlewares/validRegister");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/login", userController.login);  //se utiliza la constante userController para utilizar la ruta
router.get("/sing-up", userController.singUp);

router.post("/save", [validRegister], userController.save)
router.post("/access", [], userController.access)

module.exports = router;
