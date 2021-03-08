const router = require('koa-router')();
const controller = require('../../controller/client/index');


router.prefix('/');
router.get('/', controller.getPage);
module.exports = router;