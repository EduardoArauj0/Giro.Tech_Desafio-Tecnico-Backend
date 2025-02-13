const sequelize = require('../config/database')
const Currency = require('./Currency')
const ExchangeRate = require('./ExchangeRate')
const Investor = require('./Investor')
const InvestmentHistory = require('./InvestmentHistory')

const syncDatabase = async () => {
	try {
		await sequelize.sync({ force: false })
		console.log('✅ Banco de dados sincronizado')
	} catch (error) {
		console.error('❌ Erro ao sincronizar banco de dados:', error)
	}
}

module.exports = {
	sequelize,
	syncDatabase,
	Currency,
	ExchangeRate,
	Investor,
	InvestmentHistory,
}
