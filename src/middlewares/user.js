const userModel = require("../models/user")
module.exports = (req, res, next) => {

    const user = null;

    if (req.cookies.user != undefined) {
        user = userModel.search("email", req.cookies.user);
    }

    if (req.session.user != undefined) {
        user = req.session.user;
    }
    
    res.locals.user = user;

    next();
};