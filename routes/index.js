const router = require('koa-router')()
const todoModel = require('../model/todo')

router.prefix('/get')

router.get('/', async(ctx, next) => {
    ctx.body = await todoModel.find({})
})

router.get('/add', async(ctx, next) => {
    ctx.body = await new todoModel({
        name: ctx.request.query.name,
        date: Date.parse(new Date()).toString()
    }).save()
})

router.get('/del', async(ctx, next) => {
    ctx.body = await todoModel.find({
        _id: ctx.request.query.id
    }).remove()
})

module.exports = router