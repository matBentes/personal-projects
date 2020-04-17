export const port = process.env.PORT

export const db = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB
}

export const corsUrl = process.env.CORS_URL
