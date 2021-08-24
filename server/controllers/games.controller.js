const Game = require('../models/game.model');


exports.getAll = async(req,res)=>{ 
    const games = await Game.find({});
    res.send(games);
}


exports.create  = async(req,res)=>{
    let game = new Game(req.body);
    game.image = req.file.filename;
    await game.save();
    res.redirect('/admin/games'); 
}


// exports.delete = async(req,res)=>{
//     await Character.findByIdAndDelete(req.params.id);
//     res.send('Chars deleted');
// }

// exports.update = async(req,res)=>{ 
//     await Character.findByIdAndUpdate(req.params.id,req.body);
//     res.send('char updated');
// }