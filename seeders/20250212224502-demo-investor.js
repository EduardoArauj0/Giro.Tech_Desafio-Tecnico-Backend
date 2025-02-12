
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Investors', [
      {
        name: 'João Silva',
        email: 'joao.silva@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maria Oliveira',
        email: 'maria.oliveira@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Carlos Souza',
        email: 'carlos.souza@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Investors', null, {});
  },
};
