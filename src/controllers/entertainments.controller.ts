import { Request, Response } from "express";
import httpStatus from "http-status";
import { Entertainment } from "protocols";
import entertainmentService from "../services/entertainments.service"

export async function getEntertainmentById(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const {entertainmentId} = req.params;

    try {
        const list = await entertainmentService.getEntertainmentById(Number(entertainmentId));

        return res.send(list);

    } catch (err) {
        console.error(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getCategories(req: Request, res: Response) {

    try {
        const categories = await entertainmentService.getCategories();

        return res.send(categories)

    } catch (err) {
        console.error(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function deleteEntertainment(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const {entertainmentsUsersId} = req.params;

    try {
        await entertainmentService.deleteEntertainment(userId, Number(entertainmentsUsersId));

        return res.sendStatus(httpStatus.OK);

    } catch (err) {
        console.error(err);
        if(err.name === "FORBIDDEN"){
            return res.sendStatus(httpStatus.FORBIDDEN)
          }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function putEntertainment(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const {entertainmentsUsersId} = req.params;
    const entertainmentData = req.body as Entertainment;

    try {
        await entertainmentService.putEntertainment(userId, Number(entertainmentsUsersId), entertainmentData);

        return res.sendStatus(httpStatus.OK);

    } catch (err) {
        console.error(err);
        if(err.name === "FORBIDDEN"){
            return res.sendStatus(httpStatus.FORBIDDEN)
          }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function postNewEntertainment(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const entertainmentData = req.body as Entertainment;

    try {
        await entertainmentService.postNewEntertainment(userId, entertainmentData);

        return res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        console.error(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getAllEntertainments(req: Request, res: Response) {

    try {
        const list = await entertainmentService.getAllEntertainments();

        return res.send(list);

    } catch (err) {
        console.error(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getEntertainmentByType(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const {typeName} = req.params;

    try {
        const list = await entertainmentService.getEntertainmentByType(userId, typeName);

        return res.send(list);

    } catch (err) {
        console.error(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function getEntertainmentQuantity(req: Request, res: Response) {
    const userId: number = res.locals.userId;

    try {
        const entertainmentQuantity = await entertainmentService.getEntertainmentQuantity(userId);

        return res.send(entertainmentQuantity)

    } catch (err) {
        console.error(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
