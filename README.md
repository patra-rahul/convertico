# Convertico 🔄

<img width="2100" height="1532" alt="Screen Recording 2026-07-07 at 9 32 32 AM" src="https://github.com/user-attachments/assets/262ad7de-ee3a-454e-8309-47b5457a5baa" />

A fast, lightweight unit converter web application for converting lengths, weights, and temperatures. Built with Node.js/Express backend and vanilla JavaScript frontend.

## Features

✨ **Convert Multiple Units:**

- **Length**: Meters, Kilometers, Centimeters, Millimeters, Miles, Yards, Feet, Inches
- **Weight**: Grams, Kilograms, Milligrams, Pounds, Ounces
- **Temperature**: Celsius, Fahrenheit, Kelvin

✨ **User-Friendly Interface**: Clean, intuitive UI with real-time conversion results

✨ **Fast & Reliable**: Accurate conversion rates for all supported units

✨ **CORS Enabled**: Ready for cross-origin requests

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, Vanilla JavaScript

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/patra-rahul/convertico.git
   cd convertico
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server locally:**

   ```bash
   node server.js
   ```

   The app will be available at `http://localhost:3000`

4. **Open in browser:**
   - Length converter: `http://localhost:3000/length.html`
   - Weight converter: `http://localhost:3000/weight.html`
   - Temperature converter: `http://localhost:3000/temperature.html`

## API Endpoints

### Convert Length

- **POST** `/convert/length`
- **Body:**
  ```json
  {
    "value": 100,
    "fromUnit": "meters",
    "toUnit": "feet"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "convertedValue": 328.084
  }
  ```

### Convert Weight

- **POST** `/convert/weight`
- **Body:**
  ```json
  {
    "value": 50,
    "fromUnit": "kilograms",
    "toUnit": "pounds"
  }
  ```

### Convert Temperature

- **POST** `/convert/temperature`
- **Body:**
  ```json
  {
    "value": 25,
    "fromUnit": "celsius",
    "toUnit": "fahrenheit"
  }
  ```

## How to Use

1. **Select a converter** (Length, Weight, or Temperature)
2. **Enter the value** you want to convert
3. **Select source unit** (from)
4. **Select target unit** (to)
5. **Click Convert** to see the result
6. **Click Reset** to clear the form

## Repository

- **Repository**: [patra-rahul/convertico](https://github.com/patra-rahul/convertico)
- **Issues**: [Report bugs or suggest features](https://github.com/patra-rahul/convertico/issues)
- **License**: ISC

## Author

Rahul Patra

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

Made with ❤️ for easy unit conversions
