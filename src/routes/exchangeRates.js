const express = require('express')
const ExchangeRateController = require('../controllers/ExchangeRateController')

const router = express.Router()

router.get('/', ExchangeRateController.index)
router.get('/:id', ExchangeRateController.show)
router.post('/', ExchangeRateController.create)
router.put('/:id', ExchangeRateController.update)
router.delete('/:id', ExchangeRateController.destroy)

module.exports = router
