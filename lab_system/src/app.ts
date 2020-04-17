import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { corsUrl } from './config'
import routesV1 from './routes'

class App {
  public express: express.Application

  constructor () {
    this.express = express()
    this.middleware()
    this.routes()
  }

  private middleware (): void {
    this.express.use(express.json({ limit: '10mb' }))
    this.express.use(
      cors({
        origin: corsUrl,
        optionsSuccessStatus: 200
      })
    )
    this.express.use(morgan('dev'))
  }

  private routes (): void {
    this.express.use('/v1', routesV1)
  }
}

export default new App().express
