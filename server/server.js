const koa = require('koa2');
const kjwt = require('koa-jwt');
const bodyParser = require('koa-bodyparser');
const errorHandle = require('./middleware/errorHandle');
const config = require('config');
const connectDB = require('./config/db');
const router = require('./routes/api/mainRoute')

app = new koa();
connectDB();
const PORT = process.env.PORT || 5000;
app.use(bodyParser());
app.use(errorHandle);
app.use(kjwt({ secret: config.get('jwtSecret') }).unless({
    path: [/\/users\/login/, /\/users\/register/, /\/admin\/login/]
})).use(router.routes());


app.listen(PORT, () => {console.log('running on {$PORT}')});