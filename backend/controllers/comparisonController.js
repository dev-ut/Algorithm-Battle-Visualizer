// controllers/comparisonController.js
import Comparison from "../models/Comparison.js";

// 🟢 Ye function POST request se data lega aur MongoDB me save karega
export const saveComparison = async (req, res) => {
  try {
    // Jo bhi frontend se req.body me data aaya usse new Comparison object banaya
    const newComparison = new Comparison(req.body);

    // MongoDB me save kiya
    const saved = await newComparison.save();

    // 201 = Created Successfully
    res.status(201).json(saved);
  } catch (err) {
    // Agar error aayi toh 500 (server error) bhej rahe
    res.status(500).json({ error: "Failed to save", detail: err.message });
  }
};

// 🟢 Ye function GET request se sare comparisons fetch karega
export const getComparisons = async (req, res) => {
  try {
    // Sare comparisons latest first order me nikal rahe hain
    const all = await Comparison.find().sort({ createdAt: -1 });

    // Successfully data bhej rahe
    res.status(200).json(all);
  } catch (err) {
    // Error handle
    res.status(500).json({ error: "Failed to fetch" });
  }
};
