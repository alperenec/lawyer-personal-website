import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import fs from "fs";
import multer from "multer";
import { fileURLToPath } from "url";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up temporary storage for uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Create temp uploads directory if it doesn't exist
    const tempDir = path.join(__dirname, "../../temp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Configure multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Not an image! Please upload an image file."), false);
    }
  },
}).single("file");

export const uploadImage = (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please upload a file",
        });
      }

      try {
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "blog_images",
          resource_type: "auto",
        });

        // Delete temp file after successful upload
        fs.unlinkSync(req.file.path);

        // Return Cloudinary URL
        return res.status(200).json({
          success: true,
          url: result.secure_url,
          public_id: result.public_id,
        });
      } catch (cloudinaryError) {
        console.error("Cloudinary upload failed:", cloudinaryError);

        // Cleanup file if it exists
        if (req.file && fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }

        return res.status(500).json({
          success: false,
          message: "Error uploading to Cloudinary: " + cloudinaryError.message,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
