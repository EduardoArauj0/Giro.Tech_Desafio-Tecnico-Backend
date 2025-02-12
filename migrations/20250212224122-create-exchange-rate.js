
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('ExchangeRates', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			daily_variation: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			daily_rate: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			currency_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Currencies',
					key: 'id',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('ExchangeRates')
	},
}
