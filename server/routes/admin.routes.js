const router = require('express').Router();
const adminController = require('../controllers/admin.controller');

//  /admin


router.get('/characters',adminController.characters);
router.get('/add-char',adminController.addChar);
router.get('/edit-char/:id',adminController.editChar);
router.get('/locations',adminController.locations);
router.get('/add-location',adminController.addLocation);
router.get('/games',adminController.games);
router.get('/add-game',adminController.addGame);







module.exports = router