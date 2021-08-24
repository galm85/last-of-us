const Location = require('../models/location.model');


exports.getAll = async(req,res)=>{ 
    const locations = await Location.find({});
    res.send(locations);
}


exports.create  = async(req,res)=>{
    console.log(req.body);
    let location = new Location(req.body);
    location.image = req.file.filename;
    await location.save();
    res.redirect('/admin/locations'); 
}


// exports.delete = async(req,res)=>{
//     await Character.findByIdAndDelete(req.params.id);
//     res.send('Chars deleted');
// }

// exports.update = async(req,res)=>{ 
//     await Character.findByIdAndUpdate(req.params.id,req.body);
//     res.send('char updated');
// }