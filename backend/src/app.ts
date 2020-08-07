import express, { Application } from "express";
import config from "config";
import bodyParser from "body-parser";
import cors from "cors";
import { ErrorMiddleware } from "./helpers";
import router from "./routers";

const app: Application = express();
app.set("port", config.get("app.port") || 3000);
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);
app.use(ErrorMiddleware);

export default app;
