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

// Dosya yolu ayarları
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Environment değişkenlerini yükle
dotenv.config({ path: path.join(rootDir, ".env") });

// Environment değişkenlerini kontrol et
console.log("Environment Variables Loaded:", {
  PORT: process.env.PORT,
  MONGO: process.env.MONGO,
  CLIENT_URL: process.env.CLIENT_URL,
  JWT_SECRET: process.env.JWT_SECRET ? "Set (masked)" : "Not set",
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY
    ? "Set (masked)"
    : "Not set",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
    ? "Set (masked)"
    : "Not set",
});

// Geçici klasör oluştur
const tempDir = path.join(rootDir, "temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
  console.log("Created temporary uploads directory at:", tempDir);
}

// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Express uygulaması oluştur
const app = express();

// CORS ayarları - tüm kaynaklara izin ver
app.use(
  cors({
    origin: true, // Tüm kaynaklara izin ver
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept", "Cookie"],
  })
);

// CORS preflight istekleri için ayarlar
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.header("Origin") || "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept, Cookie"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.status(200).end();
});

// Middleware
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/upload", uploadRoutes);

// API test endpoint
app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working!",
    timestamp: new Date().toISOString(),
  });
});

// Client dosyalarını servis et
const clientDistPath = path.join(rootDir, "client", "dist");
if (fs.existsSync(clientDistPath)) {
  console.log("Serving client files from:", clientDistPath);
  app.use(express.static(clientDistPath));

  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api/")) {
      res.sendFile(path.join(clientDistPath, "index.html"));
    }
  });
} else {
  console.log("Warning: Client dist directory not found at", clientDistPath);
  console.log("Make sure to build the client side application first");
  console.log(
    "For development, you can ignore this warning if running the client separately"
  );
}

// 404 handler
app.use("/api/*", (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "API route not found",
    path: req.originalUrl,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
  });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
