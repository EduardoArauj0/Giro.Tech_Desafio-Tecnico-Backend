const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Investor = sequelize.define(
	'Investor',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
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
	},
)

module.exports = Investor
