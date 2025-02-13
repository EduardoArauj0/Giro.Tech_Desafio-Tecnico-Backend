const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Currency = sequelize.define(
	'Currency',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		tableName: 'currencies',
	},
)

module.exports = Currency
