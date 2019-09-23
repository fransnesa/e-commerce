const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cart')
const authentication = require('../middlewares/authentication')


router.post('/', authentication,cartController.createCart)
router.get('/:id', authentication,cartController.oneCart)
router.get('/', authentication, cartController.getCart)
router.delete('/:id',authentication, cartController.deleteCart)
router.patch('/:id', authentication, cartController.updateCart)


module.exports = router;