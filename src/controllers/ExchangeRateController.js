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

	async recent(req, res) {
		try {
			const sevenDaysAgo = new Date()
			sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

			const rates = await ExchangeRate.findAll({
				where: { date: { [Op.gte]: sevenDaysAgo } },
				include: {
					model: Currency,
					attributes: ['name', 'type'],
				},
			})

			const formattedRates = rates.map((rate) => ({
				id: rate.id,
				date: rate.date,
				daily_variation: rate.daily_variation,
				daily_rate: rate.daily_rate,
				currency_name: rate.Currency.name,
				currency_type: rate.Currency.type,
			}))

			return res.status(200).json(formattedRates)
		} catch (error) {
			console.error('Erro ao buscar taxas recentes:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}
	
	async deleteOld(req, res) {
		try {
			const thirtyDaysAgo = new Date()
			thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

			const deletedCount = await ExchangeRate.destroy({
				where: { date: { [Op.lt]: thirtyDaysAgo } },
			})

			return res
				.status(200)
				.json({ message: `${deletedCount} registros removidos.` })
		} catch (error) {
			console.error('Erro ao remover taxas antigas:', error)
			return res.status(500).json({ message: 'Erro interno do servidor.' })
		}
	}
}

module.exports = new ExchangeRatesController()
