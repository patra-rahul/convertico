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
  res.sendFile(path.join(__dirname, "public", "length.html"));
});

const conversionRates = {
  meters: {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    miles: 0.000621371,
    yards: 1.09361,
    feet: 3.28084,
    inches: 39.3701,
  },
  kilometers: {
    meters: 1000,
    kilometers: 1,
    centimeters: 100000,
    millimeters: 1000000,
    miles: 0.621371,
    yards: 1093.61,
    feet: 3280.84,
    inches: 39370.1,
  },
  centimeters: {
    meters: 0.01,
    kilometers: 0.00001,
    centimeters: 1,
    millimeters: 10,
    miles: 0.0000062137,
    yards: 0.0109361,
    feet: 0.0328084,
    inches: 0.393701,
  },
  millimeters: {
    meters: 0.001,
    kilometers: 0.000001,
    centimeters: 0.1,
    millimeters: 1,
    miles: 0.000000621371,
    yards: 0.00109361,
    feet: 0.00328084,
    inches: 0.0393701,
  },
  miles: {
    meters: 1609.34,
    kilometers: 1.60934,
    centimeters: 160934,
    millimeters: 1609340,
    miles: 1,
    yards: 1760,
    feet: 5280,
    inches: 63360,
  },
  yards: {
    meters: 0.9144,
    kilometers: 0.0009144,
    centimeters: 91.44,
    millimeters: 914.4,
    miles: 0.000568182,
    yards: 1,
    feet: 3,
    inches: 36,
  },
  feet: {
    meters: 0.3048,
    kilometers: 0.0003048,
    centimeters: 30.48,
    millimeters: 304.8,
    miles: 0.000189394,
    yards: 0.333333,
    feet: 1,
    inches: 12,
  },
  inches: {
    meters: 0.0254,
    kilometers: 0.0000254,
    centimeters: 2.54,
    millimeters: 25.4,
    miles: 0.0000157828,
    yards: 0.0277778,
    feet: 0.0833333,
    inches: 1,
  },
};

app.post("/convert-length", (req, res) => {
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
