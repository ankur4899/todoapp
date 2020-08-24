const todosModel = require('../models/todos.model');

module.exports = {

    /**
     * Function to Create Todos
     */
    createTodo: (req, res, next) => {
        const data = req.body;
        todosModel.create(data, (err, data) => {
            if (err) {
                return next(err);
            }
            res.send(data);
        })
    },

    /**
     * Function to update todos by id
     */
    updateTodo: (req, res, next) => {
        const id = req.params.id;
        const data = req.body;
        data['updatedAt'] = new Date();

        todosModel.findOneAndUpdate({ id: id }, data, { new: true }, (err, todoData) => {
            if (err) {
                return next(err);
            }
            if (data) {
                res.json(data);
            } else {
                res.json({ message: `Task with Id ${id} does not exist` })
            }
            res.send();
        })
    },

    /**
     * Function to get all todos
     */
    getTodos: (req, res, next) => {

        todosModel.find({}, (err, data) => {
            if (err) {
                return next(err);
            }
            res.json(data);
            res.send();
        })
    },

    /**
     * Function to get todos by id
     */
    getTodoById: (req, res, next) => {
        const id = req.params.id;

        todosModel.findOne({ id: id }, (err, data) => {
            if (err) {
                return next(err);
            }
            if (data) {
                res.json(data);
            } else {
                res.json({ message: `Task with Id ${id} does not exist` })
            }

            res.send();
        })
    },

    /**
     * Function to delete todo by id
     */
    removeTodo: (req, res, next) => {
        const id = req.params.id;

        todosModel.findOneAndDelete({ id: id }, (err, data) => {
            if (err) {
                return next(err);
            }
            if (data) {
                res.json(data);
            } else {
                res.json({ message: `Task with Id ${id} does not exist` })
            }
            res.send();
        })
    }

}