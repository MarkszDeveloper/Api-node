const SerieService = require("../services/serieService");

exports.findAllSeries = async (req, res) => {
    try {
        const series = await SerieService.findAllSeries()
        res.status(200).json(series);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}  

exports.createNewSerie = async (req, res) => {
    try {
        const body = req.body;
        const serie = await SerieService.createNewSerie(body);
        res.status(200).json(serie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateSerieById = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const update = await SerieService.updateSerieById(id, body);
        res.status(200).json(update);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteSerieById = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await SerieService.deleteSerieById(id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.patchNameByIdAndValue = async (req, res) => {
    try {
        const id = req.params.id;
        const value = req.body.value;
        const patch = await SerieRepository.patchName(id, value);
        res.status(200).json(patch);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.patchDurationByIdAndValue = async (req, res) => {
    try {
        const id = req.params.id;
        const value = req.body.value;
        const patch = await SerieRepository.patchDuration(id, value);
        res.status(200).json(patch);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.patchYearByIdAndValue = async (req, res) => {
    try {
        const id = req.params.id;
        const value = req.body.value;
        const patch = await SerieRepository.patchYear(id, value);
        res.status(200).json(patch);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}