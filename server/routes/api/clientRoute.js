const router = require('koa-router')();
const { syncEvent } = require('../../controller/client/index');
const controller = require('../../controller/client/index');

router.prefix('/');
router.get('/', controller.getPage);
router.get('/About', controller.getPage);
router.get('/Outreach', controller.getPage);
router.get('/Activities', controller.getPage);
router.post('/testSync', syncEvent);
module.exports = router;