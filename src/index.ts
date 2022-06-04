import express from 'express'
import { PORT } from './util/config'
// import { connectToDatabase } from './util/db'

const app = express()
app.use(express.json())


app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

