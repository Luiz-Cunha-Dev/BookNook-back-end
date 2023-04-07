import { Router } from "express";
import { getEntertainmentQuantity } from "../controllers/entertainments.controller";

const entertainmentRouter = Router();

entertainmentRouter
.get("/entertainment", getEntertainmentQuantity)

export default entertainmentRouter;