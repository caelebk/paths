import express, { Express, Request, Response } from "express";
import cors from "cors";
import config from "@secret/config.json";
import { userRouter } from "@routes/UserRoutes";

const port = config.port || 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});