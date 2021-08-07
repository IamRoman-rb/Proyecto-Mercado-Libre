const express = require("express");
const path = require("path");
const validRegister = require("../middlewares/validRegister");
const user = require("../middlewares/user");
const app = express()

const router = express.Router();

router.post("/login", (req, res) => {
    res.send("recibido")
});

router.get("")
