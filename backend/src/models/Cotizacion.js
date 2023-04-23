import { Schema, model } from 'mongoose'

const SchemaCotizacion = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true }
})

export default model('Cotizacion', SchemaCotizacion)
