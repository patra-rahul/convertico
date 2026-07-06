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
  res.sendFile(path.join(__dirname, "public", "temperature.html"));
});

const conversionRates = {
  celsius: {
    celsius: (value) => value,
    fahrenheit: (value) => (value * 9) / 5 + 32,
    kelvin: (value) => value + 273.15,
  },
  fahrenheit: {
    celsius: (value) => ((value - 32) * 5) / 9,
    fahrenheit: (value) => value,
    kelvin: (value) => ((value - 32) * 5) / 9 + 273.15,
  },
  kelvin: {
    celsius: (value) => value - 273.15,
    fahrenheit: (value) => ((value - 273.15) * 9) / 5 + 32,
    kelvin: (value) => value,
  },
};

app.post("/convert", (req, res) => {
  const { value, fromUnit, toUnit } = req.body;

  if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid units provided." });
  }

  const convertedValue = conversionRates[fromUnit][toUnit](parseFloat(value));
  res.json({ success: true, convertedValue });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
