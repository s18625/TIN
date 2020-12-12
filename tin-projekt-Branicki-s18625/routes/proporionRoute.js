const express = require('express');
const router = express.Router();
const proportionController = require('../controllers/proportionController');
router.get('/', proportionController.showProportionList);
router.get('/add', proportionController.showProportionForm);
router.get('/details/:propId?', proportionController.showProportionDetails);
module.exports = router;