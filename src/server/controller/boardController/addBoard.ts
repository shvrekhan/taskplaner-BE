import { Request, Response } from "express";
import { addBoardToDb, getAllBoardsFn, generateUUID } from "../commonRouterFunctions";

export const addBoard = async (req: Request, res: Response) => {
    try {
        const userId = req.cookies['23_AAAAA_888888']?.user_id;
        const boardName = req.body.name;
        const created_at = new Date;
        const id = generateUUID()
        await addBoardToDb(id, userId, boardName, created_at);
        const allBoards = await getAllBoardsFn(userId);
        res.status(200).json(allBoards);
    } catch (error) {
        console.error(error);
        res.status(500).json("internal server error");
    }
}