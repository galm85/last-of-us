const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    title:{type:String},
    image:{type:String},
    city:{type:String},
    article:{type:String},
})


const Location = mongoose.model('Location',locationSchema);

module.exports = Location;

