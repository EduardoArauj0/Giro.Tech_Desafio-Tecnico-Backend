const { InvestmentHistory } = require('../models')

class InvestmentHistoryController {
	async index(req, res) {
		try {
			const history = await InvestmentHistory.findAll()
			return res.status(200).json(history)
		} catch (error) {
			console.error('Erro ao listar histórico de investimentos:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async show(req, res) {
		try {
			const { id } = req.params
			const investment = await InvestmentHistory.findByPk(id)
			if (!investment) {
				return res
					.status(404)
					.json({ message: 'Registro de investimento não encontrado.' })
			}
			return res.status(200).json(investment)
		} catch (error) {
			console.error('Erro ao buscar registro de investimento:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async create(req, res) {
		try {
			const { investorId, currencyId, amount, date } = req.body
			if (!investorId || !currencyId || !amount || !date) {
				return res
					.status(400)
					.json({ message: 'Todos os campos são obrigatórios.' })
			}
			const investment = await InvestmentHistory.create({
				investorId,
				currencyId,
				amount,
				date,
			})
			return res.status(201).json(investment)
		} catch (error) {
			console.error('Erro ao registrar investimento:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params
			const { amount, date } = req.body
			const investment = await InvestmentHistory.findByPk(id)
			if (!investment) {
				return res
					.status(404)
					.json({ message: 'Registro de investimento não encontrado.' })
			}
			await investment.update({ amount, date })
			return res.status(200).json(investment)
		} catch (error) {
			console.error('Erro ao atualizar registro de investimento:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async destroy(req, res) {
		try {
			const { id } = req.params
			const investment = await InvestmentHistory.findByPk(id)
			if (!investment) {
				return res
					.status(404)
					.json({ message: 'Registro de investimento não encontrado.' })
			}
			await investment.destroy()
			return res.status(204).send()
		} catch (error) {
			console.error('Erro ao excluir registro de investimento:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}
}

module.exports = new InvestmentHistoryController()
