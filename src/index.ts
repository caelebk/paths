import express, { Express, Request, Response } from "express";

const port: number = 3000;

const app: Express = express();

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});