const fs = require("fs");
const path = require("path");
const userModel = require("../models/user");
const {validationResult} = require("express-validator");

module.exports = {
    login: (req, res) => res.render("user/login", {title: "Access"}),
    singUp: (req, res) => res.render("user/sing-up", {title: "Crea Tu Cuenta"}),

    save: (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.render("users/register",{ errors: errors.mapped(),title:"Crea Tu Cuenta",old:req.body });
        }else{
          userModel.create(req.body);
          return res.redirect("/user/login");
        }
      },
}