const express = require('express');

const router = express.Router();
const controller = require('../controllers/toDoController');

router.get('/', controller.getAllTasks)
router.get('/:id', controller.getSingleTask)
router.post('/', controller.addTask)
router.patch('/:id', controller.updateTask)
router.delete('/:id', controller.deleteTask);

module.exports = router;

