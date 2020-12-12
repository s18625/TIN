const express = require('express');
const router = express.Router();
const ingreadientController = require('../controllers/ingreadientController');
router.get('/', ingreadientController.showIngreadientsList);
router.get('/add', ingreadientController.showIngreadientsForm);
router.get('/details/:ingreadientId?', ingreadientController.showIngreadientsDetails);
module.exports = router;