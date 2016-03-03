"use strict";

var userChoice = prompt("Enter a food item: ");

console.log(userChoice);

 
if (!isNaN(userChoice)) {
 
	alert("You must enter a food item!");
}
 
else if(isNaN(userChoice)) {
	alert("You chose: " + userChoice)
}


 
 
 