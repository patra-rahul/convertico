const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve static frontend files from the `public` folder
app.use(express.static(path.join(__dirname, "public")));

// Serve a default page at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "weight.html"));
});

const conversionRates = {
  grams: {
    grams: 1,
    kilograms: 0.001,
    milligrams: 1000,
    pounds: 0.00220462,
    ounces: 0.035274,
  },
  kilograms: {
    grams: 1000,
    kilograms: 1,
    milligrams: 1000000,
    pounds: 2.20462,
    ounces: 35.274,
  },
  milligrams: {
    grams: 0.001,
    kilograms: 0.000001,
    milligrams: 1,
    pounds: 0.00000220462,
    ounces: 0.000035274,
  },
  pounds: {
    grams: 453.592,
    kilograms: 0.453592,
    milligrams: 453592,
    pounds: 1,
    ounces: 16,
  },
  ounces: {
    grams: 28.3495,
    kilograms: 0.0283495,
    milligrams: 28349.5,
    pounds: 0.0625,
    ounces: 1,
  },
};

app.post("/convert", (req, res) => {
  const { value, fromUnit, toUnit } = req.body;

  if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid units provided." });
  }

  const convertedValue = value * conversionRates[fromUnit][toUnit];
  res.json({ success: true, convertedValue });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
