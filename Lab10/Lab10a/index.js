// require("dotenv").config();
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get(["/", "/home"], (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to my website");
});
app.get("/image", (req, res) => {
  const imagePath = path.join(__dirname, "public", "image.jpg");
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.end(data);
    }
  });
});
app.get("/pdf", (req, res) => {
  const pdfPath = path.join(__dirname, "public", "document.pdf");
  fs.readFile(pdfPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "application/pdf" });
      res.end(data);
    }
  });
});
app.get("/about", (req, res) => {
  const aboutPath = path.join(__dirname, "public", "about.txt");
  fs.readFile(aboutPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    }
  });
});
app.use((req, res) => {
  res.status(404).send("Not Found");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
