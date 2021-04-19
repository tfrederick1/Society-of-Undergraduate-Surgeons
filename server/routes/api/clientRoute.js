const router = require('koa-router')();
const config = require('config');
const controller = require('../../controller/client/index');

router.prefix('/api');
router.get('/Homepage', controller.getPage);
router.get('/About', controller.getPage);
router.get('/Member', controller.getPage);
router.get('/Contact', controller.getPage);
router.get('/Outreach', controller.getPage);
router.get('/Outreach/Student', controller.getPage);
router.get('/Outreach/Teacher', controller.getPage);
router.get('/Outreach/Other', controller.getPage);
router.get('/Activities', controller.getPage);
module.exports = router;