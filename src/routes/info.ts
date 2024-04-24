import { Request, Response, Router } from 'express'

export const infoRouter = Router()

infoRouter.get('/', (req: Request, res: Response) => {
    res.send('GET - Hier sind deine To-Do Einträge: ...')
})

infoRouter.post('/', (req: Request, res: Response) => {
    res.send('POST - Deine POST Anfrage ist angekommen!')
})