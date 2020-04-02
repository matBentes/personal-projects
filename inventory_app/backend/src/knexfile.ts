// Update with your config settings.
import dontenv from 'dotenv'

dontenv.config({ path: '../.env' })

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
    },
    migrations: {
      directory: './database/migrations',
    },
  },
}
