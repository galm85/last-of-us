const Character = require('../models/character.model');


exports.characters = async(req,res)=>{
    const characters = await Character.find({});
    res.render('admin/characters',{characters});
}

exports.addChar = (req,res)=>{
    res.render('admin/addChar');
}