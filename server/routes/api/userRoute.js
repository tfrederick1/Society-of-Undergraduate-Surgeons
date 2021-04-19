const router = require('koa-router')();
const controller = require('../../controller/user/index');


router.prefix('/user');
router.post('/register', controller.postRegister);
router.post('/addMember', controller.postMember);
router.post('/login', controller.postLogin);
router.post('/updatePage', controller.updateContent);
router.post('/updateMember', controller.updateMember);
router.post('/addContent', controller.postContent);
router.post('/updateTest', controller.postTest);
module.exports = router;