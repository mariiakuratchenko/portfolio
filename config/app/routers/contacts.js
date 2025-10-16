var express = require('express');
var router = express.Router();

var contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
router.get('/:Id', contactsController.getContactById);
router.post('/', contactsController.create);
router.put('/:Id', contactsController.put);
router.delete('/:Id', contactsController.deleteOneContact);
router.delete('/', contactsController.deleteAll);

module.exports = router;