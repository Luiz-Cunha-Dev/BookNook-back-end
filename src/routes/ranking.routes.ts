import { getRanking } from "../controllers/ranking.controller";
import { Router } from "express";
import { tokenValidation } from "../middlewares/tokenValidation";

const rankingRouter = Router();

rankingRouter
.all("/ranking/*", tokenValidation)
.get("/ranking/general", getRanking)

export default rankingRouter;