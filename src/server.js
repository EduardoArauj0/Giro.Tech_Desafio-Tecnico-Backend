const express = require('express')
const { syncDatabase } = require('./models')

const app = express()
app.use(express.json())

syncDatabase()

app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'))
