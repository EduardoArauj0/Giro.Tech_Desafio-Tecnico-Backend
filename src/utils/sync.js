const sequelize = require('../config/database')
const Currency = require('../models/Currency')
const ExchangeRate = require('../models/ExchangeRate')
const Investor = require('../models/Investor')
const InvestmentHistory = require('../models/InvestmentHistory')

async function syncDatabase() {
	try {
		await sequelize.sync({ force: true })
		console.log('Banco de dados sincronizado com sucesso!')
	} catch (error) {
		console.error('Erro ao sincronizar o banco de dados:', error)
	}
}

syncDatabase()
