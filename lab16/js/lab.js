/* 
 *  lab.js - This lab experiments with processing JSON from an API. 
 *  Requirements: jQuery must be loaded for this script to work. 

 *  Author: Hailey Phipps
 *  Created: June 5, 2025
 */ 

// ajax object
const ajaxObj = {
  url: "https://xkcd.com/info.0.json",
  data: {
    api_key: "DEMO_KEY"
  },
  type: "GET",
  dataType: "json"
}

// Button listener
$("#button").click(function() {
  // Call ajax
  $.ajax(ajaxObj)
  // success callback
  .done(function(data) {
    console.log(data);
    
    // Extract the answer from data
    let title = data.title;
    let num = data.num;
    let desc = data.transcript;
    let imageURL = data.img;

    // Put data in output
    $("#output").html(`<h2>${title}</h2>`);
    $("#output").append(`<img src='${imageURL}' />`);
    $("#output").append(`<p class='date'>${num}</p>`);
    $("#output").append(`<p class='date'>${desc}</p>`);
  })
  // Fail callback
  .fail(function(xhr, status, errorThrown) {
    console.log("Error:" + errorThrown + " Status:" + status );
  });
})
