const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27027/test', {
    useMongoClient: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'.red))

db.once('connected', callback => {
    console.log('数据库链接成功'.green)
})


module.exports = mongoose