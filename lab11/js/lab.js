/* 
 *  lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version. 
 *  Requirements: jQuery must be loaded for this script to work. 

 *  Author: Hailey Phipps
 *  Created: May 19, 2025
 */ 

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it.
  return inputString.split('').sort().join('');
}

// Add an event listener for button.
$("#submit").click(function() {
  // Get value of input field. 
  const userName = $("#user-name").val();
  // Now sort the user-name. 
  userNameSorted = sortString(userName);
  // Append a new div to our output div.
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
