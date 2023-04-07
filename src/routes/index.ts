import { Router } from "express";
import entertainmentRouter from "./entertainments.routes";
import goalRouter from "./goals.routes";
import authRouter from "./auth.routes";

const router = Router();
router.use(entertainmentRouter)
router.use(goalRouter)
router.use(authRouter)

export default router;