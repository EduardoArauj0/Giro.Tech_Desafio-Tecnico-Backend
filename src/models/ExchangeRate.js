const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Currency = require('./Currency')

const ExchangeRate = sequelize.define(
	'ExchangeRate',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		daily_variation: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		daily_rate: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		tableName: 'exchange_rates',
	},
)

// Relacionamento
ExchangeRate.belongsTo(Currency, { foreignKey: 'currency_id' })
Currency.hasMany(ExchangeRate, { foreignKey: 'currency_id' })

module.exports = ExchangeRate
