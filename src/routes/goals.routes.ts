import { getGoals, postGoal, putGoal } from "../controllers/goals.controller";
import { Router } from "express";
import { tokenValidation } from "../middlewares/tokenValidation";
import goalSchema from "../schemas/goal.schema";
import { schemaValidation } from "../middlewares/schemaValidation";

const goalRouter = Router();

goalRouter
.all("/goals/*", tokenValidation)
.get("/goals/all", getGoals)
.post("/goals/create", schemaValidation(goalSchema), postGoal)
.put("/goals/update/:goalId", schemaValidation(goalSchema), putGoal)

export default goalRouter;