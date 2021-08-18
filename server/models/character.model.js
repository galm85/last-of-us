const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    status:{type:String,require:true}
})


const Character = mongoose.model('Character',characterSchema);

module.exports = Character;

