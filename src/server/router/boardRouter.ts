import { Router } from "express";
import { getAllBoards } from "../controller/boardController/getBoards";
import { addBoard } from "../controller/boardController/addBoard";
import { removeBoard } from "../controller/boardController/removeBoard";

const boardRouter: Router = Router();


boardRouter.get('/getBoards', getAllBoards)


boardRouter.post('/addBoard', addBoard)


boardRouter.delete('/deleteBoard/:id', removeBoard)

export default boardRouter;