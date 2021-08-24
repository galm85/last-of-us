const Character = require('../models/character.model');
const Location = require('../models/location.model');
const Game = require('../models/game.model');

exports.homePage = async(req,res)=>{
    res.render('index');
}


exports.charactersPage = async(req,res)=>{
    const users = await Character.find({});
    res.render('characters',{characters:users});
}

exports.singleChar = async(req,res)=>{
    const char = await Character.findOne({name:req.params.charname});
    res.render('singleChar',{char});
}



exports.locationsPage = async(req,res)=>{
    const locations = await Location.find({});
    res.render('locations',{locations});
}
exports.singleLocation = async(req,res)=>{
    const location = await Location.findOne({title:req.params.title});
    res.render('singleLocation',{location});
}


exports.gamesPage = async(req,res)=>{
    const games = await Game.find({});
    res.render('games',{games});
}