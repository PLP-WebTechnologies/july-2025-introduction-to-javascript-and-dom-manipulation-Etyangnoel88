/*****************************
 * 🎯 Part 1: JavaScript Basics
 *****************************/
function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const message = document.getElementById("ageMessage");

  if (isNaN(age)) {
    message.textContent = "Please enter a valid number.";
  } else if (age >= 18) {
    message.textContent = "You're eligible to rent a home!";
  } else {
    message.textContent = "Sorry, you must be 18+ to rent.";
  }
}

/********************************
 * ❤️ Part 2: Custom Functions
 ********************************/

// Function 1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

function showSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = addNumbers(num1, num2);
  document.getElementById("sumResult").textContent = "Sum: " + result;
}

// Function 2: Toggle visibility
function toggleDetails() {
  const details = document.getElementById("details");
  details.style.display = (details.style.display === "none") ? "block" : "none";
}

/********************************
 * 🔁 Part 3: JavaScript Loops
 ********************************/

// Loop 1: Count to 5
function countToFive() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  document.getElementById("countOutput").textContent = output;
}

// Loop 2: List features
function showFeatures() {
  const features = ["Smart Rentals", "Verified Listings", "Instant Alerts", "24/7 Support"];
  const list = document.getElementById("featureList");
  list.innerHTML = ""; // Clear previous list

  features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    list.appendChild(li);
  });
}

/********************************
 * 🌐 Part 4: DOM Manipulation
 ********************************/

// DOM Action 1: Change background color
function changeBackground() {
  document.body.style.backgroundColor = getRandomColor();
}

// Helper function: Generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
