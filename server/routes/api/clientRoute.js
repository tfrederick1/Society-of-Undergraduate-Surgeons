const router = require('koa-router')();
const controller = require('../../controller/client/index');

router.prefix('/');
router.get('/api/Homepage', controller.getPage);
router.get('/api/About', controller.getPage);
router.get('/api/Outreach', controller.getPage);
router.get('/api/Activities', controller.getPage);
module.exports = router;