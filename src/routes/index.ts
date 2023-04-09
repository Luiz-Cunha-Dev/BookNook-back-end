import { Router } from "express";
import entertainmentRouter from "./entertainments.routes";
import goalRouter from "./goals.routes";
import authRouter from "./auth.routes";
import rankingRouter from "./ranking.routes";
import userRouter from "./user.routes";

const router = Router();
router.use(entertainmentRouter)
router.use(goalRouter)
router.use(authRouter)
router.use(rankingRouter)
router.use(userRouter)

export default router;