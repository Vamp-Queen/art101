/* 
 *  lab.js - This simple JavaScript/jQuery script gets a value from an input field and assigns a profile to the user based on the length of the inputted name. 
 *  Requirements: jQuery must be loaded for this script to work. 

 *  Author: Hailey Phipps
 *  Created: May 22, 2025
 */ 

// Create a function that assigns an element to the user based on their inputted name. 
function bendingElement(str) {
  // Take the length of the user-inputted string.
  const length = str.length;

  // Take the modulus of the length of the string. 
  const mod = length % 4;

  let element;
  let message;

  // Assign an element to the user based on the modulus. 
  if (mod === 0) {
      element = "Water";  
      message = "<b>Water</b><br>You are a Waterbender.<br>Water is the element of <i>change</i>.<br>Water Tribes are capable of adapting to many things.<br>They have a sense of community and love that holds them together through anything.";
      console.log('Water');
  } else if (mod === 1) {
      element = "Earth";
      message = "<b>Earth</b><br>You are an Earthbender.<br>Earth is the element of <i>substance</i>.<br>The people of the Earth Kingdom are diverse and strong.<br>They are persistent and enduring.";
      console.log('Earth');
  } else if (mod === 2) {
      element = "Fire";
      message = "<b>Fire</b><br>You are a Firebender.<br>Fire is the element of <i>power</i>.<br>The people of the Fire Nation have desire and will, and the energy to drive and achieve what they want.";
      console.log('Fire');
  } else {
      element = "Air";
      message = "<b>Air</b><br>You are an Airbender.<br>Air is the element of <i>freedom</i>.<br>The Air Nomads detached themselves from worldly concerns and found peace and freedom.";
      console.log('Air');
    }

    return message;
  }

// Add an event listener for button.
$("#button").click(function() {
  // Get value of input field.
  const str = $("#input").val();
  const elementMessage = bendingElement(str);

  // Append a new div to our output div.
  $("#output").html('<div class="text"><p>' + elementMessage + '</p></div>');
});
