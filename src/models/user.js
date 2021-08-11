const path = require("path");
const fs = require("fs");
const typeModel = require("./type")
const bcrypt = require("bcrypt")

module.exports = {
    directory: path.resolve(__dirname, "../data", "user.json"), //path.resolve devuelve la ruta

    all: function(){
        return fs.existsSync(this.directory) ? JSON.parse(fs.readFileSync(this.directory)) : null
    },
    extras: function (){
        return this.all().map(user => {
            user.type = typeModel.one(user.type)
            return user
        })
    },
    one: function(id){
        return this.extras().find(user => user.id == id)
    },
    oneWithExtra: function (id){
        return this.extras().find(user => user.id == id)
    },
    filter: function (prop, value){
        return this.extras().filter(user => user[prop] == value) //prop es el user del archivo user
    },
    search: function (prop, value){
        return this.extras().find(user => user[prop] == value)
    },
    generateId: function(){
        const elements = this.all();
        const quantity = elements.length;
        const last = quantity-1
        return quantity > 0 ? elements[last].id + 1 : 1;
    },
    write: function(data){
        return fs.writeFileSync(this.directory, JSON.stringify(data, null, 2))
    },
    create: function(data, file){
        const elements = this.all();
        const avatar = file != undefined ? "user" + file.filename : "user/default.png";
        data.password = bcrypt.hashSync(String(data.password), 10) //esto incripta la contraseña
        const user = {id: this.generateId(), ...data,avatar}
        elements.push(user);
        this.write(elements);
        return user;
    }
}