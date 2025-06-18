// routes/comparisonRoutes.js
import express from "express";
import { saveComparison, getComparisons } from "../controllers/comparisonController.js";

const router = express.Router();

// 🟢 /save route => data ko database me save karega
router.post("/save", saveComparison);

// 🟢 /all route => sare past comparisons ko fetch karega
router.get("/all", getComparisons);

export default router;
