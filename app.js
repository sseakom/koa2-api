const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')()
const logger = require('koa-logger')
const cors = require('koa-cors')

const index = require('./routes/index')

const post = require('./routes/post')

// error handler
onerror(app)

// middlewares
app.use(bodyparser)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(cors())

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

// logger
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    const data = JSON.stringify((ctx.method == 'GET') ? ctx.request.query : ctx.request.body)
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms - data: ${data}`)
})

// routes
app.use(index.routes(), index.allowedMethods())

app.use(post.routes(), post.allowedMethods())

module.exports = app