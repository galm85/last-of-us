const Character = require('../models/character.model');


exports.getAll = async(req,res)=>{ 
    const chars = await Character.find({});
    res.send(chars);
}


exports.postChar  = async(req,res)=>{
    let char = new Character(req.body);
    char.image = req.file.filename;
    await char.save();
    res.send('new char saved');
}
