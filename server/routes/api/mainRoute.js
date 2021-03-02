const router = require('koa-router')();
const index = require('./indexRoute');
const admin = require('./adminRoute');
const user = require('./userRoute');

router.use(index.routes(), index.allowedMethods());
router.use(admin.routes(), admin.allowedMethods());


module.exports = router;