import { Request, Response } from "express";
import httpStatus from "http-status";
import { user } from "protocols";
import userService from "../services/user.service";

export async function putDarkMode(req: Request, res: Response) {
    const userId: number = res.locals.userId;

    try {

        await userService.putDarkMode(userId);

        return res.sendStatus(httpStatus.OK);

    } catch (err) {
        console.error(err);
        if(err.name === "NOT_FOUND"){
            return res.sendStatus(httpStatus.NOT_FOUND)
          }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function putUser(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const userData = req.body as user;

    try {

        await userService.putUser(userId, userData);

        return res.sendStatus(httpStatus.OK);

    } catch (err) {
        console.error(err);
        if(err.name === "NOT_FOUND"){
            return res.sendStatus(httpStatus.NOT_FOUND)
          }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}