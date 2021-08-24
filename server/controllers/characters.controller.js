const Character = require('../models/character.model');


exports.getAll = async(req,res)=>{ 
    const chars = await Character.find({});
    res.send(chars);
}


exports.postChar  = async(req,res)=>{
    console.log(req.body);
    let char = new Character(req.body);
    char.image = req.file.filename;
    if(!char.gender) char.gender = "Unknown";
    if(!char.voice) char.voice = 'Unknown';
    if(!char.age) char.age = 0;
    await char.save();
    res.redirect('/admin/characters');
    
    
}


exports.delete = async(req,res)=>{
    await Character.findByIdAndDelete(req.params.id);
    res.send('Chars deleted');
}

exports.update = async(req,res)=>{ 
    await Character.findByIdAndUpdate(req.params.id,req.body);
    res.send('char updated');
}