const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {type: String},
            cardioform: {type: String},
            resistanceform: {type: String},
            cardioname: {type: String},
            name: {type: String},
            weight: {type: Number},
            sets: {type: Number},
            reps: {type: Number},
            duration: {type: Number},
            resistanceduration: {type: Number},
            distance: {type: Number},
        }
    ]
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
