import { Router } from "express";
import {
  addCampus,
  getCampusById,
  getCampuses,
} from "../controllers/campus.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { threads } from "./threads.js";

export const campus = Router();

campus
  .get("/", getCampuses)
  .get("/:campusId", getCampusById)

  .post("/", authMiddleware, addCampus)

  .use("/:campusId/threads", threads);
