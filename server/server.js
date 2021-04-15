const koa = require('koa2');
const kjwt = require('koa-jwt');
const bodyParser = require('koa-bodyparser');
const koaBody = require("koa-body");
const kCors = require('koa2-cors');
const errorHandle = require('./middleware/errorHandle');
const config = require('config');
const connectDB = require('./config/db');
const router = require('./routes/api/mainRoute');
const jwtUnless = require('./utils/jwtUnless');

app = new koa();
connectDB();
const PORT = process.env.PORT || 5000;
app.use(bodyParser());
app.use(kCors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowMethods: ['GET', 'POST'],
    maxAge: 86400
}));
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024
    }
}));
app.use(errorHandle);
/*app.use(kjwt({ secret: config.get('jwtSecret') }).unless({
    path: (ctx) => {
        if(jwtUnless.checkisNonTokenApi(ctx)) {
            return true;
        }
        return false;
    } 
}))*/
app.use(router.routes());

app.listen(PORT, () => {console.log('running on {$PORT}')});