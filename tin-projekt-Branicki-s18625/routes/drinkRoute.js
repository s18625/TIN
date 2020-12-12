const express = require('express');
const router = express.Router();
const drinkControler = require('../controllers/drinkController');
router.get('/', drinkControler.showDrinkList);
router.get('/add', drinkControler.showAddDrinkForm);
router.get('/details/:drinkId?', drinkControler.showDrinkDetails);
module.exports = router;