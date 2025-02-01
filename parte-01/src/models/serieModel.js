const mongoose = require("mongoose");

class SerieModel {
    constructor() {}

    // Este método vai validar o nome pelo seu tamanho
    static nameValidation(name) {
        if (name.length < 40 || name.length < 1) {
            throw new Error("Tamanho de nome inválido");
        };
    }

    // Este método vai validar o id pelo seu formato, se é um id válido ou não
    static idValidation(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Id inválido");
        };
    }

    // Este método vai validar o nome e o id pelo seu tamanho e formato, respectivamente
    static fullValidation(name, id) {
        this.nameValidation(name);
        this.idValidation(id);
    }
}
    

module.exports = SerieModel;