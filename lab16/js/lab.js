/* 
 *  lab.js - This lab experiments with processing JSON from an API. 
 *  Requirements: jQuery must be loaded for this script to work. 

 *  Author: Hailey Phipps
 *  Created: June 5, 2025
 */ 

// ajax object
const comicObj = {
  url: "https://corsproxy.io/?https://xkcd.com/info.0.json",
  data: {},
  type: "GET",
  dataType: "json"
};

// Button listener
$("#button").click(function() {
  console.log("Click!");

  // Call ajax
  $.ajax(comicObj)
  
  // success callback
  .done(function(data) {
    console.log("Success!");
    console.log(data);
    
    // Extract the answer from data
    let title = data.title;
    let num = data.num;
    let desc = data.transcript;
    let imageURL = data.img;
    let altText = data.alt;

    // Put data in output
    $("#output").html(`<h2>${title}</h2>`);
    $("#output").append(`<p><strong>Comic #:</strong> ${num}</p>`);
    $("#output").append(`<p><strong>Transcript:</strong> ${desc || "No transcript available."}</p>`);
    $("#output").append(`<img src="${imageURL}" alt="${altText}" title="${altText}" />`);
  })

  // Fail callback
  .fail(function(xhr, status, error) {
    // Error handler
    console.error(error);
  });

});
