const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static("public")); // your HTML, CSS, JS files go here

// API to save About data
app.post("/save-about", (req, res) => {
  const data = req.body;

  const filePath = path.join(__dirname, "public", "data", "about.json");

  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "error", message: "Failed to save data" });
    }
    res.json({ status: "success", message: "About info saved successfully!" });
  });
});

// API to save Contact data
app.post("/save-contact", (req, res) => {
  const data = req.body;

  const filePath = path.join(__dirname, "public", "data", "contact.json");

  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "error", message: "Failed to save data" });
    }
    res.json({ status: "success", message: "Contact info saved successfully!" });
  });
});


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
