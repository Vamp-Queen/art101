/* 
 *  Author: Hailey Phipps
 *  Created: April 24, 2025
 *  License: Public Domain
 *  index.js - This code declares variables about my car and calculates its age. 
 */ 

// Define Variables
let make = "Ford";
let model = "Thunderbird";
let color = "red";
let carYear = 1997;
let currentYear = 2025;
let ownIt = true;
let age = currentYear - carYear;

// Main function
function main() {
  console.log("Age: " + age);

  // Get the output div
  const outputEl = document.getElementById("output");

  // Add output to the page using innerHTML
  outputEl.innerHTML += "Make: " + make + "<br>";
  outputEl.innerHTML += "Model: " + model + "<br>";
  outputEl.innerHTML += "Color: " + color + "<br>";
  outputEl.innerHTML += "Year: " + carYear + "<br>";
  outputEl.innerHTML += "Age: " + age + " years<br>";
  outputEl.innerHTML += "I own a red " + carYear + " " + make + " " + model + ".<br>";
  outputEl.innerHTML += "It is " + age + " years old.<br>";
}

main();
