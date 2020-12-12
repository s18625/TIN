const express = require('express');
const router = express.Router();

const proportionApiController = require('../../api/ProportionAPI');

router.get('/', proportionApiController.getProportion);
router.get('/:propId', proportionApiController.getProportionById);
router.post('/', proportionApiController.createProportion);
router.put('/:propId', proportionApiController.updateProportion);
router.delete('/:propId', proportionApiController.deleteProportion);

module.exports = router;