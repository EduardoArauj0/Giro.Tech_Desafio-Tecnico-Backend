const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Currency = require('./Currency')

const ExchangeRate = sequelize.define(
	'ExchangeRate',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		date: {
			type: DataTypes.DATE,
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
	},
)

ExchangeRate.belongsTo(Currency, { foreignKey: 'currency_id' })

module.exports = ExchangeRate
