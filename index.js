import fs from "fs";
import http, { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = createServer((req, res) => {
  const imagePath = path.join(__dirname, "image.jpg");
  const pdfPath = path.join(__dirname, "document.pdf");
  const aboutPath = path.join(__dirname, "about.txt");

  if (req.url === "/image" && req.method === "GET") {
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.end(data);
      }
    });
  } else if (req.url === "/pdf" && req.method === "GET") {
    fs.readFile(pdfPath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "application/pdf" });
        res.end(data);
      }
    });
  } else if (req.url === "/about" && req.method === "GET") {
    fs.readFile(aboutPath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      }
    });
  } else if (req.url === "/home" || (req.url === "/" && req.method === "GET")) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my website");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is now running ");
});
