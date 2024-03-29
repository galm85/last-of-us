const { render } = require('ejs');
const Character = require('../models/character.model');
const Location = require('../models/location.model');
const Game = require('../models/game.model');


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



exports.locations = async(req,res)=>{
    const locations = await Location.find({});
    res.render('admin/locations',{locations});
}

exports.addLocation = (req,res)=>{
    res.render('admin/addLocation');
}


exports.games = async(req,res)=>{
    const games = await Game.find({});
    res.render('admin/games',{games});
}

exports.addGame = (req,res)=>{
    res.render('admin/addGame');
}
