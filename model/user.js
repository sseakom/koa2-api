const mongoose = require('./mongoose')

const userModel = mongoose.model('user', new mongoose.Schema({
    username: String,
    password: String,
    date: String,
}))

module.exports = userModel