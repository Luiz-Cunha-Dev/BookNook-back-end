import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export function schemaValidation(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        const errors = error.details.map((detail) => detail.message);
        console.log("erros validate", errors);
        return res.status(422).send(errors);
      }
      next();
    };
  }