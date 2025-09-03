import Project from "../models/Project.model.js";
import { runAccessibilityCheck } from "../utils/pa11yCheck.js";
//  Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Get most recent project
export const getRecentProject = async (req, res) => {
  try {
    const project = await Project.findOne().sort({ createdAt: -1 }).limit(5);
    if (!project) return res.status(404).json({ success: false, message: "No project found" });
    res.json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Search projects (by name, url, description)
export const searchProjects = async (req, res) => {
  try {
    const { query } = req.query; // /search?query=portfolio
    const projects = await Project.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { url: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Create project
export const createProject = async (req, res) => {
  try {
    const { name, url, description } = req.body;
    if (!name || !url || !description) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const project = new Project({ name, url, description });
    await project.save();

    res.status(201).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Update project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, project: updatedProject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Delete project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Run accessibility test for a project by ID
export const checkProjectAccessibility = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    const results = await runAccessibilityCheck(project.url);

    res.json({ success: true, results });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
