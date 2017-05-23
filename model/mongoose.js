const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', callback => {
    console.log('mongodb链接成功')
})

module.exports = mongoose