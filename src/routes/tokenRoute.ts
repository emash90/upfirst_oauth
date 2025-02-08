import { Router } from "express";
import { token } from "../controllers/token";
const router = Router()

router.post('/token', token as any)



export default router
