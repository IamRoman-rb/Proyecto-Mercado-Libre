const path = require("path");
const fs = require("fs");

module.exports = (req, res, next) => {
    res.locals.styles = []; //todo se guarda dentro del array pero como string
    const elements = req.url.split("/");//toma la url que pasa como string y con el split lo que hace es pasar a array en string
    if (elements.length > 0) {
        elements.forEach(elemnt => {
            let file = path.resolve(__dirname, "../../public/css",element+".css")//con esto se guarda como un archivo
            if (fs.existsSync(file)) { //y con esto chequea si el archivo esta
                res.locals.styles.push(element) //locals es una variable que para directamente a la vista, no pasa por el controlador
            }
        })
    }   else{
        res.locals.styles.push("main")
    }
    next();
}