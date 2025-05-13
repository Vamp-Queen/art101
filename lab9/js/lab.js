/* 
 *  lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page.
 *  Requirements: jQuery must be loaded for this script to work. 

 *  Author: Hailey Phipps
 *  Created: May 12, 2025
 */ 

// add button to "Challenge" section.
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to "Challenge" button.
$("#button-challenge").click(function() {
  // now add (or subtract) the "special" class to the section.
  $("#button-challenge").toggleClass("special");
});

// add button to "Problems" section.
$("#problems").append("<button id='button-problems'>Make Special</button>");
// add a click listener to "Problems" button.
$("#button-problems").click(function() {
  // now add (or subtract) the "special" class to the section.
  $("#button-problems").toggleClass("special");
});

// add button to "Results" section.
$("#results").append("<button id='button-results'>Make Special</button>");
// add a click listener to "Results" button.
$("#button-results").click(function() {
  // now add (or subtract) the "special" class to the section.
  $("#button-results").toggleClass("special");
});

function main() {
  // the code that makes everything happen
  // output
}

// let's get this party started
main();
