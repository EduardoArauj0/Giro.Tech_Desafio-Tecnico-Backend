
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Currencies', [
      {
        name: 'Real',
        type: 'BRL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dollar',
        type: 'USD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Euro',
        type: 'EUR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Currencies', null, {});
  },
};
