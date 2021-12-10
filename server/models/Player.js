const mongoose = require("../database/mongodb");

const PlayerSchema = new mongoose.Schema({
    "username": {type: String, required: true},
    "password": {type: String, required: true},
    "highscore": {
        "score": {type: Number, required: false, default: 0},
        "date": {type: Date, required: false, default: new Date()}
    },
    "scores": [
        {
            "score": {type: Number, required: false, default: 0},
            "date": {type: Date, required: false, default: new Date()}
        }
    ]
})

module.exports = mongoose.model("Player", PlayerSchema);