import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import authRepository from "../repository/auth.repository";


export async function tokenValidation(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            return res.sendStatus(httpStatus.UNAUTHORIZED)
        }

        const token = authorization.replace("Bearer ", "");

        const session = await authRepository.getSessionByToken(token);

        if (!session) {
            return res.sendStatus(httpStatus.UNAUTHORIZED)
        }

        res.locals.userId = session.userId;

        return next();
    } catch (err) {
        console.error(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}
