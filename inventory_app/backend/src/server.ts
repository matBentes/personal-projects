import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Docker Container')
})
const PORT = process.env.SERVER_PORT || 3333

console.log(`Iniciando server na porta ${PORT}`)

app.listen(PORT)
