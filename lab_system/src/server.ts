import app from './app'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

createConnection().then(() => {
  // run app
  const PORT = process.env.SERVER_PORT || 3333
  app.listen(PORT)
  console.log(`Iniciando server na porta ${PORT}`)
}).catch(error => console.log('TypeORM connection error: ', error))
