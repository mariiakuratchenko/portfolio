var express = require('express');
var router = express.Router();

var projectsController = require('../controllers/projects');

router.get('/', projectsController.getAll);
router.get('/:Id', projectsController.getProjectById);
router.post('/', projectsController.create);
router.put('/:Id', projectsController.put);
router.delete('/:Id', projectsController.deleteOneProject);
router.delete('/', projectsController.deleteAll);

module.exports = router;