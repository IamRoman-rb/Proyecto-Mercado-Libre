const fs = require("fs");
const path = require("path");
const userModel = require("../models/user");
const {validationResult} = require("express-validator");

module.exports = {
    login: (req, res) => res.render("login", {title: "Access"}),
    singUp: (req, res) => res.render("sing-up", {title: "Crea Tu Cuenta"}),

    save: (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.render("sing-up",{ errors: errors.mapped(),title:"Crea Tu Cuenta",old:req.body });
        }else{
          userModel.create(req.body);
          return res.redirect("/login");
        }
      },
      access: (req, res) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.render("login", {errors: errors.mapped(), title: "Ingresar", old: req.body});
        }else{
          req.session.user = userModel.search("email", req.body.email);
          return res.redirect("/")
        }
      }
}