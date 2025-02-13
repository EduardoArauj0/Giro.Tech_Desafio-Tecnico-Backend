const express = require('express')
const CurrencyController = require('../controllers/CurrencyController')

const router = express.Router()

router.get('/', CurrencyController.index)
router.get('/:id', CurrencyController.show)
router.post('/', CurrencyController.create)
router.put('/:id', CurrencyController.update)
router.delete('/:id', CurrencyController.destroy)

module.exports = router
