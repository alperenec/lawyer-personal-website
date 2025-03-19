import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import fs from "fs";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
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
    if (!fs.existsSync("uploads/")) {
      fs.mkdirSync("uploads/");
    }

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
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "blog_images",
          resource_type: "auto",
        });

        fs.unlinkSync(req.file.path);

        return res.status(200).json({
          success: true,
          url: result.secure_url,
          public_id: result.public_id,
        });
      } catch (error) {
        console.error("Cloudinary Upload Error:", error);

        if (req.file && fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }

        return res.status(500).json({
          success: false,
          message: "Error uploading to Cloudinary: " + error.message,
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
