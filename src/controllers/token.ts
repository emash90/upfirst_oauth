import { Request, Response } from "express";


export const token = (req: Request, res: Response) => {
    res.send("token route hit")
}
