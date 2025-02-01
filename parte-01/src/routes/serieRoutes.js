const express = require("express");
const router = express.Router();
const SerieController = require("../controllers/serieController");

router.get("/", SerieController.findAllSeries);
router.post("/create", SerieController.createNewSerie);
router.put("/update/:id", SerieController.updateSerieById);
router.delete("/delete/:id", SerieController.deleteSerieById);
router.patch("/patch/name/:id", SerieController.patchNameByIdAndValue);
router.patch("/patch/duration/:id", SerieController.patchDurationByIdAndValue);
router.patch("/patch/year/:id", SerieController.patchYearByIdAndValue);

module.exports = router;