const mongoose = require('./mongoose')

const userModel = mongoose.model('user', new mongoose.Schema({
    username: String,
    password: String,
    date: { type: String, default: Date.parse(Date.now) },
}))

module.exports = userModel