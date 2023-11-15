import { Request, Response } from "express";
import { getAllBoardsFn } from "../commonRouterFunctions";


export const getAllBoards = async (req: Request, res: Response) => {
    try {
        const userData = req.cookies['23_AAAAA_888888']?.user_id;
        const allBoards = await getAllBoardsFn(userData);
        res.status(200).json(allBoards);
    } catch (error) {
        res.status(400).json("something went wrong")
    }
}