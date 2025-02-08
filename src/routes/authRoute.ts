import { Router } from "express";
import { authorize } from "../controllers/authorize"


const router = Router()

router.get('/authorize', authorize)

export default router