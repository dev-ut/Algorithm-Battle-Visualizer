// models/Comparison.js
import mongoose from "mongoose";

const comparisonSchema = new mongoose.Schema({
  algo1: {
    type: String,
    required: true,
  },
  algo2: {
    type: String,
    required: true,
  },
  result1: {
    comparisons: Number,
    swaps: Number,
    time: Number,
  },
  result2: {
    comparisons: Number,
    swaps: Number,
    time: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comparison = mongoose.model("Comparison", comparisonSchema);

export default Comparison;
