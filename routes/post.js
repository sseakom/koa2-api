const router = require('koa-router')()
const todoModel = require('../model/todo')

router.prefix('/post')

router.post('/', async(ctx, next) => {
    ctx.body = await todoModel.find({})
})

router.post('/add', async(ctx, next) => {
    ctx.body = await new todoModel({ "name": ctx.request.body.name, "date": Date.parse(new Date()).toString() }).save()
})

router.post('/del', async(ctx, next) => {
    ctx.body = await todoModel.find({ _id: ctx.request.body.id }).remove()
})

module.exports = router