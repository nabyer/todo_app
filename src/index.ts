import express, { Request, Response } from 'express'
import { infoRouter } from './routes/info'
import { todosRouter } from './routes/todo'

// define port and server

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// setup routes

app.use('/info', infoRouter)
app.use('/todo', todosRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Das ist die Hauptseite der Todo-App!');
});

// start server

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}.`)
})