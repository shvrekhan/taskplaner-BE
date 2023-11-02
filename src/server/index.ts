import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from 'path';

import authRouter from "./router/authRouter";

const app: Express = express();
const port: number | string = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.use('/', express.static('taskplaner-fe'))
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ SUCCESS: "Task Planer BE Module." });
});

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
