const { ExchangeRate } = require('../models')

class ExchangeRatesController {
	async index(req, res) {
		try {
			const rates = await ExchangeRate.findAll()
			return res.status(200).json(rates)
		} catch (error) {
			console.error('Erro ao listar taxas de câmbio:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async show(req, res) {
		try {
			const { id } = req.params
			const rate = await ExchangeRate.findByPk(id)
			if (!rate) {
				return res
					.status(404)
					.json({ message: 'Taxa de câmbio não encontrada.' })
			}
			return res.status(200).json(rate)
		} catch (error) {
			console.error('Erro ao buscar taxa de câmbio:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async create(req, res) {
		try {
			const { currencyFrom, currencyTo, rate } = req.body
			const newRate = await ExchangeRate.create({
				currencyFrom,
				currencyTo,
				rate,
			})
			return res.status(201).json(newRate)
		} catch (error) {
			console.error('Erro ao criar taxa de câmbio:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params
			const { rate } = req.body
			const exchangeRate = await ExchangeRate.findByPk(id)
			if (!exchangeRate) {
				return res
					.status(404)
					.json({ message: 'Taxa de câmbio não encontrada.' })
			}
			await exchangeRate.update({ rate })
			return res.status(200).json(exchangeRate)
		} catch (error) {
			console.error('Erro ao atualizar taxa de câmbio:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}

	async destroy(req, res) {
		try {
			const { id } = req.params
			const exchangeRate = await ExchangeRate.findByPk(id)
			if (!exchangeRate) {
				return res
					.status(404)
					.json({ message: 'Taxa de câmbio não encontrada.' })
			}
			await exchangeRate.destroy()
			return res.status(204).send()
		} catch (error) {
			console.error('Erro ao excluir taxa de câmbio:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}
}

module.exports = new ExchangeRatesController()
