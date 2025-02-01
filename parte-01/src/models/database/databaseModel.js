const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});
const DbModel = mongoose.model("series 222", schema);

module.exports = DbModel;   