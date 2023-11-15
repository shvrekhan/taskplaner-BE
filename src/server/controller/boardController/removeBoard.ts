import { Request, Response } from "express"
import { removeBoardFn } from "../commonRouterFunctions";
export const removeBoard = async (req: Request, res: Response) => {
    console.log(req.params.id, "poiu")
    try {
        const boardId = req.params.id;
        const removeBoard = await removeBoardFn(boardId);

    } catch (error) {

    }
}