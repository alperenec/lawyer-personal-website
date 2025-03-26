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
dotenv.config();

// Environment değişkenlerini kontrol et
console.log("Environment Variables Loaded:", {
  PORT: process.env.PORT,
  MONGO: process.env.MONGO,
  CLIENT_URL: process.env.CLIENT_URL,
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

// İzin verilen domainler
const allowedOrigins = [
  "https://zafer-taga.vercel.app",
  "https://zafer-taga-m6aeom3hb-alperenecs-projects.vercel.app",
  "https://zafer-taga--gilt.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

// CORS ayarları
app.use(
  cors({
    origin: function (origin, callback) {
      // origin null olabilir (örn. Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.log("CORS engellendi:", origin);
        callback(null, false);
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

// CORS preflight için özel işleyici
app.options("*", (req, res) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Accept"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    res.status(200).end();
  } else {
    res.status(200).end();
  }
});

// Express middleware
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/upload", uploadRoutes);

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

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
