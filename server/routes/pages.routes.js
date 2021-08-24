const router = require('express').Router();
const pagesController = require('../controllers/pages.controller');

router.get('/',pagesController.homePage);

router.get('/characters',pagesController.charactersPage);
router.get('/characters/:charname',pagesController.singleChar);

router.get('/locations',pagesController.locationsPage);
router.get('/locations/:title',pagesController.singleLocation);




module.exports = router