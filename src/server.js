const app = require('./app')
const { syncDatabase } = require('./models')

const startServer = async () => {
	try {
		await syncDatabase()
		app.listen(3000, () => console.log(' Servidor rodando na porta 3000'))
	} catch (error) {
		console.error('Erro ao sincronizar o banco de dados:', error)
	}
}

startServer()
