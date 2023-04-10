import { Request, Response } from "express";
import httpStatus from "http-status";
import { goal } from "../protocols";
import goalsService from "../services/goals.service";


export async function postGoal(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const goalData = req.body as goal;

    try {

        await goalsService.postGoals(userId, goalData);

        return res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        console.error(err);
        if(err.name === "CONFLICT"){
            return res.sendStatus(httpStatus.CONFLICT)
          }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getGoals(req: Request, res: Response) {
    const userId: number = res.locals.userId;

    try {

        const list = await goalsService.getGoals(userId);

        return res.send(list);

    } catch (err) {
        console.error(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}