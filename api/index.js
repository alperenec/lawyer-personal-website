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

// Check environment variables
console.log("Environment Variables Loaded:", {
  PORT: process.env.PORT,
  MONGO: process.env.MONGO,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY
    ? "Set (masked)"
    : "Not set",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
    ? "Set (masked)"
    : "Not set",
});

// Create temp directory for uploads if it doesn't exist
const tempDir = path.join(rootDir, "temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
  console.log("Created temporary uploads directory at:", tempDir);
}

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/upload", uploadRoutes);

// Check if client/dist directory exists
const clientDistPath = path.join(rootDir, "client", "dist");
if (fs.existsSync(clientDistPath)) {
  console.log("Serving client files from:", clientDistPath);
  app.use(express.static(clientDistPath));

  // Client routes fallback
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
} else {
  console.log("Warning: Client dist directory not found at", clientDistPath);
  console.log("Make sure to build the client side application first");
  console.log(
    "For development, you can ignore this warning if running the client separately"
  );

  // API-only mode - handle all non-API routes
  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api/")) {
      res.status(404).json({
        success: false,
        message: "Client files not available, API only mode",
      });
    }
  });
}

// 404 handler for API routes
app.use("/api/*", (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "API route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error(err);
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
