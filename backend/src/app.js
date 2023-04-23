import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import configs from './env.js'
import routes from './routes/Cotizacion.routes.js'
const app = express()

// Settings
app.set('port', configs.PORT)

// Middlewars
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

// Routes
app.use('/api/cotizacion/', routes)

// Server is starting
app.listen(app.get('port'), (req, res) => {
  console.log(`Server in port http://localhost:${app.get('port')}/api/cotizacion/`)
})
