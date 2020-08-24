var express = require('express');
var router = express.Router();

var todosController = require('../controllers/todos.controller');

/** Todo Routes */

/**Get Todo List */
router.get('/', todosController.getTodos);

/**Get Todo By id */
router.get('/:id', todosController.getTodoById);

/**Create Todo */
router.post('/', todosController.createTodo);

/**Update Todo By id */
router.put('/:id', todosController.updateTodo);

/**Delete Todo By id */
router.delete('/:id', todosController.removeTodo);

module.exports = router;
