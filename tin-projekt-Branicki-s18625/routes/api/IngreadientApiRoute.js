const express = require('express');
const router = express.Router();

const ingreApiController = require('../../api/IngreadientAPI');

router.get('/', ingreApiController.getIngreadient);
router.get('/:ingreId', ingreApiController.getIngreadientById);
router.post('/', ingreApiController.createIngreadient);
router.put('/:ingreId', ingreApiController.updateIngreadient);
router.delete('/:ingreId', ingreApiController.deleteIngreadient);

module.exports = router;