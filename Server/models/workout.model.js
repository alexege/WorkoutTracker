const mongoose = require("mongoose");

const Workout = mongoose.model(
    "Workout",
    new mongoose.Schema({
        name: String,
        bodypart: String,
        weight: Number,
        reps: Number,
        notes: String,
        date: Date,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    },
    { timestamps: true})
);

module.exports = Workout;