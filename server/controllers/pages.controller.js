const Character = require('../models/character.model');

exports.homePage = async(req,res)=>{
    res.render('index');
}

exports.charactersPage = async(req,res)=>{
    const users = await Character.find({});
    res.render('characters',{characters:users});
}
exports.locationsPage = async(req,res)=>{
    res.render('locations');
}

exports.singleChar = async(req,res)=>{
    const char = await Character.findOne({name:req.params.charname});
    res.render('singleChar',{char});
}