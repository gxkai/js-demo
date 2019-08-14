const dirTree = require("./directory-tree");
const fs = require('fs');
const bodyParser = require('koa-bodyparser')

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();
const static = require('koa-static');
app.use(bodyParser())

app.use(cors());

router.get('/', (ctx, next) => {
    const tree = dirTree("./", {exclude: /node_modules/})
    ctx.body =  tree
    ctx.status  = 200;
})

router.get('/file', (ctx, next) => {
    const {query: {path}}  = ctx
    console.log(path)
    const data = fs.readFileSync(path, 'utf-8')
    ctx.body = data
    ctx.status = 200
})

router.put('/file', (ctx, next) => {
    const {query: {path}, request: {body}}  = ctx
    console.log(path)
    fs.writeFileSync(path, body.code)
    ctx.body = null
    ctx.status = 200
})

app.use(static('./'));

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);
console.log(`start at %s`, 3000)