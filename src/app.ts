import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs/configs";
import { runCrons } from "./crons";
import { ApiError } from "./errors/api.error";
import { authRouter } from "./routers/auth.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

app.use(
  "*",
  (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status | 500).json({
      message: err.message,
      status: err.status,
    });
  },
);

const PORT = configs.PORT;
app.listen(PORT, async () => {
  await mongoose.connect(configs.DB_URL);
  runCrons();
  console.log("Server is running");
});
