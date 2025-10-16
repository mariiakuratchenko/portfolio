var express = require('express');
var router = express.Router();

var servicesController = require('../controllers/services');

router.get('/', servicesController.getAll);
router.get('/:Id', servicesController.getServiceById);
router.post('/', servicesController.create);
router.put('/:Id', servicesController.put);
router.delete('/:Id', servicesController.deleteOneService);
router.delete('/', servicesController.deleteAll);

module.exports = router;