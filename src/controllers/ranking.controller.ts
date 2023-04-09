import { Request, Response } from "express";
import httpStatus from "http-status";
import rankingService from "../services/ranking.service";


export async function getRanking(req: Request, res: Response) {

    try {

        const list = await rankingService.getGeneralRanking();

        return res.send(list);

    } catch (err) {
        console.error(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}