import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import {
  getAllProjects,
  getRecentProject,
  searchProjects,
  createProject,
  updateProject,
  deleteProject,
  checkProjectAccessibility,
} from "../controllers/Project.controller.js";

const router = express.Router();

// GET all projects
router.get("/get", authenticateUser, getAllProjects);

// GET most recent project
router.get("/recent", authenticateUser, getRecentProject);

// GET projects by search (name, url, description)
router.get("/search", authenticateUser, searchProjects);

// POST create project
router.post("/create", authenticateUser, createProject);

// PATCH update project
router.patch("/update/:id", authenticateUser, updateProject);

// DELETE project
router.delete("/delete/:id", authenticateUser, deleteProject);

//check Accessibility
router.get("/:id/accessibility", authenticateUser, checkProjectAccessibility);

export default router;
