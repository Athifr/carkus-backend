import { Router } from "express";
import {
  addComment,
  deleteCommentById,
  getCommentById,
  getComments,
  updateCommentById,
} from "../controllers/comment.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const comments = Router();

comments
  .get("/campuses/:campusId/threads/:threadId/comments", getComments)
  .get("/campuses/:campusId/threads/:threadId/comments/:commentId", getCommentById)
  .post("/campuses/:campusId/threads/:threadId/comments", authMiddleware, addComment)
  .put("/campuses/:campusId/threads/:threadId/comments/:commentId", authMiddleware, updateCommentById)
  .delete("/campuses/:campusId/threads/:threadId/comments/:commentId", authMiddleware, deleteCommentById);
