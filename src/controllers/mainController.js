const productos = require("../models/productos")

const controller = {
    index: (req, res) => {
        // return res.send({productos: productos.allWithExtra()})
        return res.render("index", {productos: productos.allWithExtra()})
    },
    login: (req, res) => {
        return res.render("login")
    },
    singUp: (req, res) => {
        return res.render("sing-up")
    },
}

module.exports = (controller)