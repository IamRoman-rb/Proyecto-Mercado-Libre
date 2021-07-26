const path = require("path");
const fs = require("fs");
const imagen = require ("./imagenes");


module.exports = {
    directory: path.resolve(__dirname, "../data", "productos.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },
    allWithExtra: function() {
        return this.all().map(element => {
            element.imagenes = element.imagenes.map(imageId => imagen.one(imageId))
            return element; 
        }).map(element => {
            function precio(valor){
                return Number.parseFloat(valor).toFixed(3)
            }
            element.price = "$" + precio(element.price); 
            return element; 
        })
    },
    one: function(id){
        return this.all().find(element => element.id == id);
    },
    oneWithExtra: function(id) {
        return this.allWithExtra().find(element => element.id == id);
    },
}
