const router = require('koa-router')();
const config = require('config');
const controller = require('../../controller/client/index');

router.prefix('/');
router.get('/api/Homepage', controller.getPage);
router.get('/api/About', controller.getPage);
router.get('api/Member', controller.getPage);
router.get('api/Contact', controller.getPage);
router.get('/api/Outreach', controller.getPage);
router.get('api/Outreach/Student', controller.getPage);
router.get('api/Outreach/Teacher', controller.getPage);
router.get('api/Outreach/Other', controller.getPage);
router.get('/api/Activities', controller.getPage);
module.exports = router;