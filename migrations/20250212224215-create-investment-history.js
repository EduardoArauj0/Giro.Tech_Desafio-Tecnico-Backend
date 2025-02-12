
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('InvestmentHistories', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			initial_amount: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			months: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			interest_rate: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			final_amount: {
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
			investor_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Investors',
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
		await queryInterface.dropTable('InvestmentHistories')
	},
}
