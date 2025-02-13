const { Investor } = require('../models')

class InvestorsController {
	async index(req, res) {
		try {
			const investors = await Investor.findAll()
			return res.status(200).json(investors)
		} catch (error) {
			console.error('Erro ao listar investidores:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async show(req, res) {
		try {
			const { id } = req.params
			const investor = await Investor.findByPk(id)
			if (!investor) {
				return res.status(404).json({ message: 'Investidor não encontrado.' })
			}
			return res.status(200).json(investor)
		} catch (error) {
			console.error('Erro ao buscar investidor:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async create(req, res) {
		try {
			const { name, email } = req.body
			const investor = await Investor.create({ name, email })
			return res.status(201).json(investor)
		} catch (error) {
			console.error('Erro ao criar investidor:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params
			const { name, email } = req.body
			const investor = await Investor.findByPk(id)
			if (!investor) {
				return res.status(404).json({ message: 'Investidor não encontrado.' })
			}
			await investor.update({ name, email })
			return res.status(200).json(investor)
		} catch (error) {
			console.error('Erro ao atualizar investidor:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async destroy(req, res) {
		try {
			const { id } = req.params
			const investor = await Investor.findByPk(id)
			if (!investor) {
				return res.status(404).json({ message: 'Investidor não encontrado.' })
			}
			await investor.destroy()
			return res.status(204).send()
		} catch (error) {
			console.error('Erro ao excluir investidor:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}
}

module.exports = new InvestorsController()
