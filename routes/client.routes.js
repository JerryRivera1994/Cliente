const {Router} = require('express')
const router = Router()
const controller = require('../controllers/controller')
const client = require('../middlewares/client')

// const verifySignup = require('../middlewares')

router.post('/cliente',client.verifyUser,controller.clientRegister)
router.get('/cliente',controller.client_view)
router.get('/cliente/:_id',controller.client_view_id)
router.put('/cliente/:id',controller.client_update)
router.delete('/cliente/:id',controller.client_delete)
// router.post('/signin',authCtrl.signIn)

module.exports.clientRoutes = router;