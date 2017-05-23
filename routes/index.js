const router = require('koa-router')()
const todoModel = require('../model/todo')

router.prefix('/get')

router.get('/', async(ctx, next) => {
    ctx.body = await todoModel.find({})
})

router.get('/add', async(ctx, next) => {
    const name = ctx.request.query.name + ''
    ctx.body = await new todoModel({ name: name, date: Date.parse(new Date()).toString() }).save()
})

router.get('/del', async(ctx, next) => {
    const id = ctx.request.query.id
    ctx.body = await todoModel.find({ _id: id }).remove()
})

module.exports = router