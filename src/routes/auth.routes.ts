
import { logout, signin, signup } from "../controllers/auth.controller";
import { Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidation";
import signinSchema from "../schemas/signin.schema";
import signupSchema from "../schemas/signup.schema";

const authRouter = Router();

authRouter
.post("/signup", schemaValidation(signupSchema), signup)

.post("/signin", schemaValidation(signinSchema), signin)

.delete("/logout", logout)

export default authRouter;