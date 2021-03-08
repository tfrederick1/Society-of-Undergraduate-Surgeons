const router = require('koa-router')();
const index = require('./clientRoute');
const admin = require('./adminRoute');
const user = require('./userRoute');

router.use(index.routes(), index.allowedMethods());
router.use(user.routes(), admin.allowedMethods());


module.exports = router;