document.getElementById("submit-btn").addEventListener("click", async () => {
  const inputValue = parseFloat(document.getElementById("input-value").value);
  const fromUnit = document.getElementById("from-unit").value;
  const toUnit = document.getElementById("to-unit").value;

  if (isNaN(inputValue)) {
    alert("Please enter a valid number.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/convert/length`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: inputValue, fromUnit, toUnit }),
    });

    const data = await response.json();

    if (data.success) {
      document.getElementById("result").textContent = data.convertedValue;
    } else {
      alert("Conversion failed. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
});

document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("input-value").value = "";
  document.getElementById("from-unit").selectedIndex = 0;
  document.getElementById("to-unit").selectedIndex = 0;
  document.getElementById("result").textContent = "0";
});
