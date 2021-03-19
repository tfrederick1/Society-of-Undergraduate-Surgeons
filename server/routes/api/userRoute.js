const router = require('koa-router')();
const controller = require('../../controller/user/index');


router.prefix('/user');
router.post('/addMember', controller.postMember);
router.post("/addEvent", controller.postEvent);
module.exports = router;