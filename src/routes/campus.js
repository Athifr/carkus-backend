import { Router } from "express";
import { getCampusById, getCampuses } from "../controllers/campus.js";
import { threads } from "./threads.js";

export const campus = Router();

campus
  .get("/", getCampuses)
  .get("/:campusId", getCampusById)

  .use("/:campusId/threads", threads);
