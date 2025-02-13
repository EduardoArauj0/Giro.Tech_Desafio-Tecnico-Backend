const express = require('express')
const InvestorController = require('../controllers/InvestorController')

const router = express.Router()

router.get('/', InvestorController.index)
router.get('/:id', InvestorController.show)
router.post('/', InvestorController.create)
router.put('/:id', InvestorController.update)
router.delete('/:id', InvestorController.destroy)

module.exports = router
