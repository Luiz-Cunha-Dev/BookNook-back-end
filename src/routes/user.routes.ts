import { Router } from "express";
import { tokenValidation } from "../middlewares/tokenValidation";
import { schemaValidation } from "../middlewares/schemaValidation";
import userSchema from "../schemas/user.schema";
import { putDarkMode, putUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter
.all("/user/*", tokenValidation)
.put("/user/informations", schemaValidation(userSchema), putUser)
.put("/user/darkmode", putDarkMode)

export default userRouter;