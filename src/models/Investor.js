const { DataTypes } = require('sequelize')
const sequelize = require('../database/connection')

const Investor = sequelize.define(
	'Investor',
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
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		timestamps: false,
		tableName: 'investors',
	},
)

module.exports = Investor
