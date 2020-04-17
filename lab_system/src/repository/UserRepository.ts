import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { User } from '../entity/User'

export async function index (request: Request, response: Response): Promise<void> {
  try {
    const userRepository = getManager().getRepository(User)

    const users = await userRepository.find()

    response.send(users)
  } catch (error) {
    console.log(error)
  }
}
