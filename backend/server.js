import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import productRoutes from './routes/ProductRoutes.js'

connectDB() // connect to mongodb database

const port = process.env.PORT
const app = express()

app.get('/', (req, res) => {
  res.send('API is running..')
})

app.use('/api/products', productRoutes)

app.listen(port, () => console.log(`server is running on port ${port}..`))