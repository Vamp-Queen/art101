/* 
 *  Author: Hailey Phipps
 *  Created: April 28, 2025
 *  License: Public Domain
 *  index.js - This code declares variables about my car and calculates its age. 
 */ 

// Define Variables
let myTransport = ["foot", "bike", "car", "bus", "Amtrak"];

// Create an object for my main mode of transport
var myMainRide = {
  make: "Ford",
  model: "Thunderbird",
  color: "red",
  year: 1997,
  // We can define a function within our object (called a method)
  // that uses the value of yaer above (using this.year)
  age: function() {
    return 2025 - this.year;
  }
}

function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  // the code that makes everything happen
  // output
  document.writeln("I get around by: " + myTransport + "<br>");
  // The following trick allows us to write an object to the document
  document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();
