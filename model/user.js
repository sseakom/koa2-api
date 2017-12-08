const mongoose = require('./mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    date: String,
})

//方法
userSchema.methods.echo = function() {
    console.log(this.username.yellow)
}

const userModel = mongoose.model('user', userSchema)

module.exports = userModel