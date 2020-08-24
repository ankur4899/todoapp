const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Todos = new Schema({
    id: {
        type: String,
        default: mongoose.Types.ObjectId()
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tasks: [{
        id: { type: String, default: mongoose.Types.ObjectId() },
        name: { type: String, required: true },
        description: { type: String }
    }],
    createdDate: {
        type: Date,
        default: Date.now()
    },
    updatedDate: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: 'todos'
})

module.exports = mongoose.model('todos', Todos)