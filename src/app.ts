import express from 'express'
import { defaultRouter } from './routes/default'
import { infoRouter } from './routes/info'
import { todosRouter } from './routes/todo'

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', defaultRouter)
app.use('/info', infoRouter)
app.use('/todo', todosRouter)

export default app