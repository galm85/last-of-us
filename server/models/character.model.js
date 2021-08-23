const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    image:{type:String,required:true},
    status:{type:String,require:true},
    gender:{type:String,require:true},
    age:{type:Number},
    voice:{type:String},
    article:{type:String},
})


const Character = mongoose.model('Character',characterSchema);

module.exports = Character;

