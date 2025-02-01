const SerieModel = require("../models/SerieModel");
const DbModel = require("../models/database/databaseModel");

class SerieRepository {
    constructor() {}

    static async findAll() {
        try {
            return DbModel.find();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async postSerie(body) {
        try {
            if (body.name && body.duration && body.year) {
                const bodySerie = body;
                return DbModel.create(bodySerie);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async updateById(id, body) {
        try {
            SerieModel.idValidation(id);
            return DbModel.findByIdAndUpdate(id, body, {new: true});
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async deleteById(id) {
        try {
            SerieModel.idValidation(id);
            return DbModel.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async patchName(id, value) {
        try {
            SerieModel.idValidation(id);
            return DbModel.findByIdAndUpdate(id, {name: value});
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async patchDuration(id, value) {
        try {
            SerieModel.idValidation(id);
            return DbModel.findByIdAndUpdate(id, {duration: value});
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async patchYear(id, value) {
        try {
            SerieModel.idValidation(id);
            return DbModel.findByIdAndUpdate(id, {year: value});
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = SerieRepository;