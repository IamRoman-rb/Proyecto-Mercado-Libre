const detaill = require("../models/productos")

const controller = {
    detaill: (req, res) => {
        // return res.render("productDetaill")
        return res.render("products/productDetaill", {detaill: detaill.oneWithExtra(req.params.id)})
    }
}

module.exports = controller