const express = require('express');
const router = express.Router();
const galleryControler = require('../controllers/galleryController');
router.get('/', galleryControler.showGallery);
module.exports = router;