const path = require("path");
const fs = require("fs");

module.exports = {
    directory: path.resolve(__dirname, "../data", "user.json"), //path.resolve devuelve la ruta

    all: function(){
        return fs.existsSync(this.directory) ? JSON.parse(fs.readFileSync(this.directory)) : null
    },
    one: function(id){
        return this.all().find(user => user.id == id)
    }
}