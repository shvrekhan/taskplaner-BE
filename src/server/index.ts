import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from 'path';
import authRouter from "./router/authRouter";
import { authMiddleware } from "./middleware/authMiddlware";
import boardRouter from "./router/boardRouter";

const cookieParser = require('cookie-parser')

const app: Express = express();
const port: number | string = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ SUCCESS: "Task Planer BE Module." });
});

app.use("/auth", authRouter);
app.use("/board", authMiddleware, boardRouter)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
