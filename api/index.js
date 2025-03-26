import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import uploadRoutes from "./routes/upload.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from "url";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file at the top
dotenv.config();

// Fix the path to better handle directory structure
const rootDir = path.resolve(__dirname, "..");

// Create temp directory if it doesn't exist
const tempDir = path.join(rootDir, "temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// MongoDB connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Use the cors middleware - simpler and more reliable than custom middleware
app.use(
  cors({
    // This function dynamically sets the origin based on the request
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Check if the origin ends with vercel.app (for all preview deployments)
      if (origin.endsWith("vercel.app")) {
        return callback(null, true);
      }

      // Check for localhost (development)
      if (origin.match(/^http:\/\/localhost:[0-9]+$/)) {
        return callback(null, true);
      }

      // Otherwise, deny the request
      callback(new Error("CORS policy violation"), false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
  })
);

// Standart middleware'ler
app.use(express.json());
app.use(cookieParser());

// API rotaları
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/upload", uploadRoutes);

// Client dosyalarını servis et (varsa)
const clientDistPath = path.join(rootDir, "client", "dist");
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
} else {
  // API-only mode
  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api/")) {
      res.status(404).json({
        success: false,
        message: "Client files not available, API only mode",
      });
    }
  });
}

// API 404 handler
app.use("/api/*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
