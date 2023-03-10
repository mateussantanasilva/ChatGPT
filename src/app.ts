import express from 'express'
import cors from 'cors'
import { router as routes } from './routes/routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

export { app }   
