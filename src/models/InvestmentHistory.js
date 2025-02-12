const { DataTypes } = require('sequelize')
const sequelize = require('../database/connection')
const Currency = require('./Currency')
const Investor = require('./Investor')

const InvestmentHistory = sequelize.define(
	'InvestmentHistory',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		initial_amount: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		months: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		interest_rate: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		final_amount: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		tableName: 'investment_history',
	},
)

// Relacionamentos
InvestmentHistory.belongsTo(Currency, { foreignKey: 'currency_id' })
InvestmentHistory.belongsTo(Investor, { foreignKey: 'investor_id' })
Currency.hasMany(InvestmentHistory, { foreignKey: 'currency_id' })
Investor.hasMany(InvestmentHistory, { foreignKey: 'investor_id' })

module.exports = InvestmentHistory
