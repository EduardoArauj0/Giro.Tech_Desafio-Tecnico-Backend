const { Currency } = require('../models')

class CurrencyController {
	async index(req, res) {
		try {
			const currencies = await Currency.findAll()
			return res.status(200).json(currencies)
		} catch (error) {
			console.error('Erro ao listar moedas:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async show(req, res) {
		try {
			const { id } = req.params
			const currency = await Currency.findByPk(id)
			if (!currency) {
				return res.status(404).json({ message: 'Moeda não encontrada.' })
			}
			return res.status(200).json(currency)
		} catch (error) {
			console.error('Erro ao buscar moeda:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async create(req, res) {
		try {
			const { name, type } = req.body
			if (!name || !type) {
				return res
					.status(400)
					.json({ message: 'Nome e tipo são obrigatórios.' })
			}
			const currency = await Currency.create({ name, type })
			return res.status(201).json(currency)
		} catch (error) {
			console.error('Erro ao criar moeda:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params
			const { name, type } = req.body
			const currency = await Currency.findByPk(id)
			if (!currency) {
				return res.status(404).json({ message: 'Moeda não encontrada.' })
			}
			await currency.update({ name, type })
			return res.status(200).json(currency)
		} catch (error) {
			console.error('Erro ao atualizar moeda:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async destroy(req, res) {
		try {
			const { id } = req.params
			const currency = await Currency.findByPk(id)
			if (!currency) {
				return res.status(404).json({ message: 'Moeda não encontrada.' })
			}
			await currency.destroy()
			return res.status(204).send()
		} catch (error) {
			console.error('Erro ao excluir moeda:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}
}

module.exports = new CurrencyController()
