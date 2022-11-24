import { Router } from "express";
import {
  addThread,
  deleteThreadById,
  getThreadById,
  getThreads,
  updateThreadById,
} from "../controllers/thread.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const threads = Router();

threads.get("/:campusId/threads/", getThreads);
threads.get("/:campusId/threads/:threadId", getThreadById);
threads.post("/:campusId/threads/", authMiddleware, addThread);
threads.put("/:campusId/threads/:threadId", authMiddleware, updateThreadById);
threads.delete("/:campusId/threads/:threadId", authMiddleware, deleteThreadById);
