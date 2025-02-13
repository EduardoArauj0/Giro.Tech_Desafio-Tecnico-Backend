const express = require('express')
const InvestmentHistoryController = require('../controllers/InvestmentHistoryController')

const router = express.Router()

router.get('/', InvestmentHistoryController.index)
router.get('/:id', InvestmentHistoryController.show)
router.post('/', InvestmentHistoryController.create)
router.put('/:id', InvestmentHistoryController.update)
router.delete('/:id', InvestmentHistoryController.destroy)

module.exports = router
