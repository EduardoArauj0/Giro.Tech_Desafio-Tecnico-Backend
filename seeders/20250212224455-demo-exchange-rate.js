
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ExchangeRates', [
      {
        date: '2025-02-12',
        daily_variation: 1.2,
        daily_rate: 5.50,
        currency_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2025-02-12',
        daily_variation: 0.5,
        daily_rate: 1.10,
        currency_id: 2,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2025-02-12',
        daily_variation: -0.3,
        daily_rate: 4.60,
        currency_id: 3, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ExchangeRates', null, {});
  },
};
