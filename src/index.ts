// EXPRESS SERVER(MAIN)

import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import { PrismaClient } from "@prisma/client";
import rootRouter from "./routes/rootRouter";
import { setupSwagger } from "./swagger";

const app: Express = express();
app.use(express.json());
setupSwagger(app);

app.use("/api/v1", rootRouter);
export const prismaClient = new PrismaClient({
    log: ["query"],
});

app.listen(PORT, () => {
    console.log("app is Working");
});