const {Router} = require('express')
const router = Router()
const controller = require('../controllers/controller')
const client = require('../middlewares/client')

// const verifySignup = require('../middlewares')

router.post('/cliente',client.verifyUser,controller.clientRegister)
router.get('/cliente',controller.clientView)
// router.post('/signin',authCtrl.signIn)

module.exports.clientRoutes = router;