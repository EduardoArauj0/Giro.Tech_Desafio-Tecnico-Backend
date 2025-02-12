const sequelize = require('./src/config/database');
const Currency = require('./src/models/Currency');
const ExchangeRate = require('./src/models/ExchangeRate');
const Investor = require('./src/models/Investor');
const InvestmentHistory = require('./src/models/InvestmentHistory');

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
}

syncDatabase();
