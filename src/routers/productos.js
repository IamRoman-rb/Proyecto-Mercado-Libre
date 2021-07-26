const express = require("express");
const path = require("path");
const app = express()

const router = express.Router();

const productsControllers = require("../controllers/productosController")

//router

router.get("/productDetaill/:id", productsControllers.detaill);


module.exports = router;