import dotenv from 'dotenv'
dotenv.config()

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'my-cotizacion',
  MONGO_HOST: process.env.MONGO_HOST || '127.0.0.1',
  PORT: process.env.PORT || 4000
}
