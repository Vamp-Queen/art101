/* 
 *  lab.js - This function takes a user-inputted number and loops through each number, outputting words at certain numbers. 
 *  Requirements: jQuery must be loaded for this script to work. 

 *  Author: Hailey Phipps
 *  Created: June 2, 2025
 */ 

// Go to https://yesno.wtf/api
const ajaxObj = {
  url: "https://yesno.wtf/api",
  // data: {},
  type: "GET",
  dataType: "json"
}

// When a user clicks the button
$("#activate").click(function() {
  console.log("Click!");
  
  // Use a jQuery AJAX call to fetch output
  $.ajax(ajaxObj)
  // callback for success - chained to ajax
  .done(function(data) {
    console.log("Success!");
    console.log(data);
    // Extract the answer from data
    let answer = data.answer;
    // Extract image from data
    let imgURL = data.image;
    // Build image html
    let imgHTML = "<img src='" + imgURL + "'>";
    // equivalent to above - but using string interpolation
    // let imgHTML = `<img src='${imageURL}'>`;
    // Insert the output in the output div
    $("#output").html("<h1>" + answer);
    $("#output").append(imgHTML);
  })
  // callback for failure - chained to ajax
  .fail(function(xhr, status, errorThrown) {
    console.log("Error:" + errorThrown + " Status:" + status );
  });
})
