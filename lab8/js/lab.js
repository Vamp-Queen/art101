/* 
 *  Author: Hailey Phipps
 *  Created: May 8, 2025
 *  License: Public Domain
 *  index.js - This code declares variables about my car and calculates its age. 
 */ 

// This function takes the square root of "x".
function sqRoot(x) {
  var results = Math.sqrt(x);
  return results;
}

// test the function.
console.log("What is the square root of 64?", sqRoot(64));
console.log("What is the square root of 121?", sqRoot(121));

// Create an array "myArray" with 7 numbers.
myArray = [1, 4, 9, 16, 25, 36, 60];
console.log("My array", myArray);

// Create a variable "mapResults" that uses function "sqRoot" to root the array "myArray".
var mapResults = myArray.map(sqRoot);
// Print out these results in the console.
console.log("This is the square root of my array: ", mapResults);

// Anon function that squares the array instead of roots it.
var mapResults = myArray.map(function(x) {
  return Math.pow(x, 2);
})

// Should return [1, 16, 81, 256, 625, 1296, 3600]
console.log("Square the array: ", mapResults);

function main() {
  // the code that makes everything happen
  // output
}

// let's get this party started
main();
