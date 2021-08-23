const Character = require('../models/character.model');


exports.getAll = async(req,res)=>{ 
    const chars = await Character.find({});
    res.send(chars);
}


exports.postChar  = async(req,res)=>{
    let char = new Character(req.body);
    char.image = req.file.filename;
    if(!char.gender) char.gender = "Unknown";
    if(!char.voice) char.voice = 'Unknown';
    if(!char.age) char.age = 0;
    await char.save();
    res.redirect('/admin/characters');
    
    
}
