const router = require('express').Router();
const multer = require('multer');
const charContorller = require('../controllers/characters.controller');

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



router.get('/',charContorller.getAll);
router.post('/', upload.single('image'),charContorller.postChar);
router.post('/update/:id', upload.single('image'),charContorller.update);
router.delete('/delete/:id',charContorller.delete);

module.exports = router