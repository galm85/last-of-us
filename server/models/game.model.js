const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title:{type:String},
    image:{type:String},
    console:String,
    year:{type:String},
    article:{type:String},
})


const Game = mongoose.model('Game',gameSchema);

module.exports = Game;

