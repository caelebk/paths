import express, { Express, Request, Response } from "express";
import cors from "cors";
import config from "./secret/config.json";

const port: number = config.port;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});