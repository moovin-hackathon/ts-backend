import 'dotenv/config'
import { resolve } from 'path'
import express from 'express'
import cors from 'cors'
import 'express-async-errors'

import routes from './routes'
import './database'

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(cors())
    this.server.use('/adp', express.static(resolve(__dirname, '..', 'public')))
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
