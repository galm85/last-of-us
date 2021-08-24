const Character = require('../models/character.model');


exports.characters = async(req,res)=>{
    const characters = await Character.find({});
    res.render('admin/characters',{characters});
}

exports.addChar = (req,res)=>{
    res.render('admin/addChar');
}

exports.editChar = async(req,res)=>{
   
    const char = await Character.findById(req.params.id);
    res.render('admin/editChar',{char});
}