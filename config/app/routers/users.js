var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/:Id', usersController.getUserById);
router.post('/', usersController.create);
router.put('/:Id', usersController.put);
router.delete('/:Id', usersController.deleteOneUser);
router.delete('/', usersController.deleteAll);

module.exports = router;