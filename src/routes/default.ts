import { Request, Response, Router } from 'express'

export const defaultRouter = Router()

defaultRouter.get('/', (req: Request, res: Response) => {
    res.send('Das ist die Hauptseite der To-Do-App.');
});