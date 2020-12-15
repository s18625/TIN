const express = require('express');
const router = express.Router();
const drinkControler = require('../controllers/drinkController');
router.get('/', drinkControler.showDrinkList);
router.get('/add', drinkControler.showAddDrinkForm);
router.get('/details/:drinkId', drinkControler.showDrinkDetails);
router.get('/edit/:drinkId', drinkControler.showEditDrinkForm);
//
router.post('/add', drinkControler.addDrink);
router.post('/edit', drinkControler.updateDrink);
router.get('/delete/:drinkId', drinkControler.deleteDrink);
module.exports = router;