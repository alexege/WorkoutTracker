const mongoose = require("mongoose");

const Exercise = mongoose.model(
    "Exercise",
    new mongoose.Schema({
        name: String,
    },
    { timestamps: true})
);

module.exports = Exercise;