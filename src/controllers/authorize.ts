import { Request, Response } from "express";


export const authorize = (req: Request, res: Response) => {
    res.send('auth route hit')
}

