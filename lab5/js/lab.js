/* 
 *  Author: Hailey Phipps
 *  Created: April 24, 2025
 *  License: Public Domain
 *  index.js - This code declares variables about my car and calculates its age. 
 */ 

// Define Variables
make = "Ford";
model = "Thunderbird";
color = "red";
carYear = 1997;
currentYear = 2025;

// Functions
ownIt = true;
age = currentYear - carYear;

function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  // the code that makes everything happen
  console.log("Age: " + age);
  // output
  document.writeln("Make: " + make + "<br>");
  document.writeln("Model: " + model + "<br>");
  document.writeln("Color: " + color + "<br>");
  document.writeln("Year: " + carYear + "<br>");
  document.writeln("Age: " + age + " years<br>");
  document.writeln("I own a red " + carYear + " " + make + " " + model + ".<br>");
  document.writeln("It is " + age + " years old.<br>");
}

// let's get this party started
main();
