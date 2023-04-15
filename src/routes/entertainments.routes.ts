import { Router } from "express";
import { tokenValidation } from "../middlewares/tokenValidation";
import { deleteEntertainment, getAllEntertainments, getCategories, getEntertainmentById, getEntertainmentByType, getEntertainmentQuantity, postExistingEntertainment, postNewEntertainment, putEntertainment } from "../controllers/entertainments.controller";
import { schemaValidation } from "../middlewares/schemaValidation";
import entertainmentSchema from "../schemas/entertainments.schema";

const entertainmentRouter = Router();

entertainmentRouter
.all("/entertainment/*", tokenValidation)
.get("/entertainment/categories", getCategories)
.get("/entertainment/type/:typeName", getEntertainmentByType)
.get("/entertainment/id/:entertainmentId", getEntertainmentById)
.get("/entertainment/all", getAllEntertainments)
.get("/entertainment/quantity", getEntertainmentQuantity)
.post("/entertainment/create", schemaValidation(entertainmentSchema), postNewEntertainment)
.post("/entertainment/add/:entertainmentId", postExistingEntertainment)
.put("/entertainment/update/:entertainmentsUsersId", schemaValidation(entertainmentSchema), putEntertainment)
.delete("/entertainment/delete/:entertainmentsUsersId", deleteEntertainment)

export default entertainmentRouter;