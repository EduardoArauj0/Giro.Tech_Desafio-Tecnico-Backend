
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('InvestmentHistories', [
      {
        initial_amount: 1000.00,
        months: 12,
        interest_rate: 5.5,
        final_amount: 1200.00,
        currency_id: 1,  
        investor_id: 1,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        initial_amount: 2000.00,
        months: 24,
        interest_rate: 3.0,
        final_amount: 2200.00,
        currency_id: 2,  
        investor_id: 2,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        initial_amount: 1500.00,
        months: 18,
        interest_rate: 4.0,
        final_amount: 1800.00,
        currency_id: 3,  
        investor_id: 3,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('InvestmentHistories', null, {});
  },
};
