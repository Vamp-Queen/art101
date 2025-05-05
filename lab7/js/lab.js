/* 
 *  Author: Hailey Phipps
 *  Created: May 4, 2025
 *  License: Public Domain
 *  index.js - This code declares variables about my car and calculates its age. 
 */ 

// Desc.
function sortName() {
  var userName = window.prompt("Hello, user. What is your name?");
  console.log("userName =", userName);
  // Split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // Sort the array.
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // Join array back to a string.
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // The above lines can also be written as a single line:
  //    userName.toLower().split("").sort().join("")
  return nameSorted;
}

function main() {
  // the code that makes everything happen
  // output
  document.writeln("Hello user, the name you provided needs correcting.<br><br>");
  document.writeln("Here is what I think your name should be: ",
    sortName(), "</br>");
}

// let's get this party started
main();
