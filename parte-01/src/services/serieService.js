const serieRepository = require("../repositories/serieRepository");

class SerieService {
    static async findAllSeries() {
        return serieRepository.findAll();
    }

    static async createNewSerie(body) {
        return await serieRepository.postSerie(body);
    }

    static async updateSerieById(id, body) {
        return await serieRepository.updateById(id, body);
    }

    static async deleteSerieById(id) {
        return await serieRepository.deleteById(id);
    }

    static async patchNameByIdAndValue(id, value) {
        return await serieRepository.patchName(id, value);
    }

    static async patchDurationByIdAndValue(id, value) {
        return await serieRepository.patchDuration(id, value);
    }

    static async patchYearByIdAndValue(id, value) {
        return await serieRepository.patchYear(id, value);
    }
}

module.exports = SerieService;