const router = require('express').Router();
const adminController = require('../controllers/admin.controller');

router.get('/characters',adminController.characters);
router.get('/add-char',adminController.addChar);
router.get('/edit-char/:id',adminController.editChar);







module.exports = router