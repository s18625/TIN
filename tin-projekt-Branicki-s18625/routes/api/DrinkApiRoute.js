const express = require('express');
const router = express.Router();

const drinkApiController = require('../../api/DrinkAPI');

router.get('/', drinkApiController.getDrink);
router.get('/:drinkId', drinkApiController.getDrinkById);
router.post('/', drinkApiController.createDrink);
router.put('/:drinkId', drinkApiController.updateDrink);
router.delete('/:drinkId', drinkApiController.deleteDrink);

module.exports = router;