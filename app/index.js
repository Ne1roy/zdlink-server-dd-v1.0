const koa = require('koa');
const koaLogger = require('koa-logger');
const onerror = require('koa-onerror');
const bodyParser = require('koa-body-parser');
const apis = require('./api');
//const helper = require('./middleware/helper');
const cors = require('koa-cors');
const static = require('koa-static');
const app = koa();
global.PORT = 8448;
global.TicketCacheMap = [];
global.TokenCache = {};
app.env = process.env.NODE_ENV || 'development';
if (app.env === 'development') {
    app.use(koaLogger());
   // app.use(helper());
}
onerror(app);
app.use(cors());
app.use(bodyParser());
app.use(apis.routes());
app.use(static('app/static'));
app.use(apis.allowedMethods());

app.listen(PORT);
console.log('HTTP服务器启动成功，端口：' + PORT);