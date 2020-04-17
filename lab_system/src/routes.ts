import { Router } from 'express'
import * as UserRepository from './repository/UserRepository'
const routes = Router()

routes.get('/', (req, res) => res.send('Ola mundo'))

routes.get('/users', UserRepository.index)

export default routes
