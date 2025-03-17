import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";
import multer from "multer";
import { errorHandler } from "../utils/error.js";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dawfeytg8",
  api_key: "182551838384879",
  api_secret: "v89bQL3iPKkM7DDpGEsefAp-zTI",
});
// Configure multer for temporary storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this directory exists
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
  limits: { fileSize: 5 * 1024 * 1024 }, // limit to 5MB
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Not an image! Please upload an image file."), false);
    }
  },
}).single("file");

export const uploadImage = (req, res, next) => {
  try {
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync("uploads/")) {
      fs.mkdirSync("uploads/");
    }

    upload(req, res, async (err) => {
      if (err) {
        return next(errorHandler(400, err.message));
      }

      // If no file was uploaded
      if (!req.file) {
        return next(errorHandler(400, "Please upload a file"));
      }

      try {
        // Upload file to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "blog_images",
          resource_type: "auto",
        });

        // Delete the file from local storage
        fs.unlinkSync(req.file.path);

        // Return success and the image URL
        return res.status(200).json({
          success: true,
          url: result.secure_url,
          public_id: result.public_id,
        });
      } catch (error) {
        console.error("Cloudinary Upload Error:", error);

        // If upload to Cloudinary fails, delete the local file
        if (req.file && fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }

        return next(
          errorHandler(500, "Error uploading to Cloudinary: " + error.message)
        );
      }
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
