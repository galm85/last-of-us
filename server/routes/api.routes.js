const router = require('express').Router();
const multer = require('multer');
const charContorller = require('../controllers/characters.controller');
const locationsContorller = require('../controllers/locations.controller');

// =====================  upload Image =======================================

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        if(file){
            cb(null,'./assets/images');
        }
    },
    filename:(req,file,cb)=>{
        if(file){
            cb(null,new Date().toISOString()+'-'+file.originalname);
        }
    }
})

const upload = multer({storage:storage})




// =====================  Routes =============================================

//  /api

// Characters
router.get('/characters',charContorller.getAll);
router.post('/characters', upload.single('image'),charContorller.postChar);
router.post('/characters/update/:id', upload.single('image'),charContorller.update);
router.delete('/characters/delete/:id',charContorller.delete);

// Locations
router.get('/locations',locationsContorller.getAll);
router.post('/locations',upload.single('image'),locationsContorller.create);


module.exports = router