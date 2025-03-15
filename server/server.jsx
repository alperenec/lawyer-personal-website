import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get("/api/contact", (req, res) => {
  res.json({
    address:
      "Güzelhisar Mah. Adnan Menderes Blv. Ocak Pasajı Aso Apt. No:21 / 12 09010 Efeler/AYDIN",
    phone: "+90 533 031 9009",
    email: "av.zafertaga@gmail.com",
  });
});

// SSR için örnek bileşen
const ServerComponent = () => {
  return (
    <html>
      <head>
        <title>Av. Zafer Tağa</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/main.js"></script>
      </body>
    </html>
  );
};

// SSR endpoint
app.get("/", (req, res) => {
  const html = renderToString(<ServerComponent />);
  res.send(`<!DOCTYPE html>${html}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
