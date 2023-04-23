import { Router } from 'express'
import Cotizacion from '../models/Cotizacion.js'

const router = Router()

router.get('/', async (req, res) => {
  const cotizaciones = await Cotizacion.find()
  res.send(cotizaciones)
})

router.get('/:id', async (req, res) => {
  const cotizacion = await Cotizacion.findById(req.params.id)
  res.send(cotizacion)
})

router.post('/', async (req, res) => {
  const { name, desc, price, year } = req.body
  const newCotizacion = new Cotizacion({ name, desc, price, year })
  await newCotizacion.save()
  res.json({ status: 200 })
})

// router.put('/:id', async (req, res) => {
//   const { name, desc, year, price } = req.body
//   const updatedCotizacion = { name, desc, price, year }
//   const options = { new: true }
//   const cotizacion = await Cotizacion.findByIdAndUpdate(req.params.id, updatedCotizacion, options)
//   res.json({ status: 203, cotizacion })
// })

router.delete('/:id', async (req, res) => {
  await Cotizacion.findByIdAndDelete(req.params.id)
  res.json({ status: 200 })
})

export default router
