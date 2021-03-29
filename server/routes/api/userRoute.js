const router = require('koa-router')();
const { postRegister } = require('../../controller/user/index');
const controller = require('../../controller/user/index');


router.prefix('/user');
router.post('/register', postRegister);
router.post('/addMember', controller.postMember);
router.post("/addEvent", controller.postEvent);
module.exports = router;