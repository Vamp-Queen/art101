/* 
 *  lab.js - This function takes a user-inputted number and loops through each number, outputting words at certain numbers. 
 *  Requirements: jQuery must be loaded for this script to work. 

 *  Author: Hailey Phipps
 *  Created: May 26, 2025
 */ 

// Constants for factors and their output strings. 
const RULES = [
  { factor: 3, word: "Fizz" },
  { factor: 5, word: "Buzz" },
  { factor: 7, word: "Boom" },
  { factor: 11, word: "Bang!" } // Bonus factor!!
];

// Main function to generate and display the results. 
function fizzBuzzBoom(maxNumber) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear previous output. 

  for (let i = 1; i <= maxNumber; i++) {
    let result = "";

    for (let rule of RULES) {
      if (i % rule.factor === 0) {
        result += rule.word;
      }
    }

    const outputText = result ? `${i} ${result}!` : `${i}`;
    const p = document.createElement("div");
    p.textContent = outputText;
    p.className = "entry";
    outputDiv.appendChild(p);
  }
}

// Hook into the form submit.
document.getElementById("settingsForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const maxVal = parseInt(document.getElementById("maxNum").value);
  if (!isNaN(maxVal) && maxVal > 0) {
    fizzBuzzBoom(maxVal);
  }
});

// Run default on load
fizzBuzzBoom(200);
