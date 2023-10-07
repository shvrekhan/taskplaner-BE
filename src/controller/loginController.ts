import { Request, Response } from "express";
import Joi from "joi";
import pool from "../model/connection";
import query from "../model/queries";

const loginUser = (req: Request, res: Response) => {
  console.log("login route");
  pool.query(query.create, (error, data) => {
    if (!error) {
      console.log("mooj ho gyi guis");
      res.status(200).json("mooj ho gyi guis");
    } else {
      console.log("code fat gya", error);
    }
  });
};

export default loginUser;
