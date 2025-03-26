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

// Improved CORS configuration
app.use((req, res, next) => {
  // List of allowed origins
  const allowedOrigins = [
    "https://zafer-taga.vercel.app",
    "https://zafer-taga-m6aeom3hb-alperenecs-projects.vercel.app",
    "https://zafer-taga-g4ukbbfzd-alperenecs-projects.vercel.app",
  ];

  // Add localhost for development
  if (process.env.NODE_ENV === "development") {
    allowedOrigins.push(
      "http://localhost:3000",
      "http://localhost:5173",
      "http://127.0.0.1:5173"
    );
  }

  // Check if the origin is in our allowed list
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else if (!origin) {
    // For non-browser requests that don't have an origin
    res.setHeader("Access-Control-Allow-Origin", "*");
  } else if (origin && origin.endsWith(".vercel.app")) {
    // Allow all Vercel preview deployments
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  // Enable credentials
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Allow methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  // Allow headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

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
