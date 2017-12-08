const router = require('koa-router')()
const userModel = require('../model/user')

router.prefix('/user')

router.post('/signUp', async(ctx, next) => {
    const res = await userModel.findOne({
        username: ctx.request.body.username
    })
    if (res) {
        ctx.body = "用户名重复"
    } else {
        let userEntity = new userModel({
            username: ctx.request.body.username,
            password: ctx.request.body.password,
            date: Date.parse(new Date()).toString()
        })
        await userEntity.save()
    }
    ctx.body = "注册成功"
})

router.post('/signIn', async(ctx, next) => {
    const res = await userModel.findOne({
        username: ctx.request.body.username,
        password: ctx.request.body.password,
    })
    if (res) {
        ctx.body = "登录成功"
    } else {
        ctx.body = "用户名或者帐号错误"
    }
})

module.exports = router