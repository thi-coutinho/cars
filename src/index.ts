import cors from 'cors';
import express, {Express, json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import carsRouter from "./routes/carsRouter.js";
import handleErrorsMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { connectDb, disconnectDB } from "./config/database.js";
dotenv.config();

const app = express();
app.use(cors())
app.use(json());
app.use(carsRouter);
app.use(handleErrorsMiddleware);

function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

async function close(): Promise<void> {
  await disconnectDB();
}

const port = +process.env.PORT || 5000;
init().then(() => {
  app.listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Server is listening on port ${port}.`);
  });
});
