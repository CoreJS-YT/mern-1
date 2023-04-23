import mongoose from 'mongoose'
import configs from './env.js'

mongoose.connect(`mongodb://${configs.MONGO_HOST}/${configs.MONGO_DATABASE}`)
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err))
