const mongoose = require('./mongoose')

const todoModel = mongoose.model('todo', new mongoose.Schema({
    name: String,
    date: String,
}))

module.exports = todoModel