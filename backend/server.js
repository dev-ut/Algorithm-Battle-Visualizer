// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import comparisonRoutes from "./routes/comparisonRoutes.js"; // 🟢 Comparison ke routes import

dotenv.config();
const app = express();

// 🟢 MongoDB se connection establish
connectDB();

// 🟢 Middleware: CORS + JSON parsing enable
app.use(cors());
app.use(express.json());

// 🟢 All comparison related routes yaha se start hote hain
app.use("/api/comparisons", comparisonRoutes);

// 🟢 Default route to test API
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 🟢 Server ko start kar rahe defined PORT pe
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
