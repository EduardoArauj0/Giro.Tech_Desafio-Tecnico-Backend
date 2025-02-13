const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/currency', require('./routes/currencyRoutes'))
app.use('/exchange-rates', require('./routes/exchangeRates'))
app.use('/investors', require('./routes/investors'))
app.use('/investment-history', require('./routes/investmentHistory'))

module.exports = app
