"use strict";





























/*var i = 100;
 
do {
	if(i % 10 === 0) {
    console.log(i);
	}
	else console.log(i)
    i-=10;
} while (i >= 0*/
/*
for (var i = 90; i >= 30; i-=3) {
    console.log(i);
}*/
/*
var i = 0;
 
while (i <= 10) {
    if (i === 5 || i === 7) {
        i++;
        continue;
    }
 
    console.log(i);
    i++;
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
 
    if (i === 6) {
        break;
    }
}
*/	
/*
var fruits = ["cherry", "apple", "peach", "plum", "banana"];
fruits.push("kiwi");
for (var i = 0; i < fruits.length; i++) {
    
	if (fruits[i] === "peach") {
		continue;
	}
	console.log(fruits[i]);
}*/
    














/*
function square(number) {
	if (!number || typeof number !== "number" || typeof true === 'boolean' || typeof false === 'boolean') {
		return NaN;
	}
  return number * number;
}

function capitalize(str) {
    if (!str || typeof str !== "string" ){
		return ("");
	}
	if (str[str.length-1] !== ".") {
		str = str + ".";
	}
	
	return str[0].toUpperCase() + str.slice(1);
}

function reverse(str){
	if (!str || typeof str !== "string" || str.length < 2 || str.length % 2 == 1){
		return ("");
	}
	
    return str.substring(str.length/2) + str.substring(0,str.length/2);
}

function bonus(str) {
	var result;
	if (!str || typeof str !== "string")
		return "";
	if(str.length == 1) {
		return str;
	}
	else if (str.length % 2 === 1) {
		result = str.substring(Math.ceil(str.length/2), str.length) + str.charAt(Math.floor(str.length/2)) + str.substring(0, Math.floor(str.length/2));
	}
	else {
		result = str.substring(str.length/2, str.length) + str.substring(0, str.length/2);
	}
	return result;
}

function calc(num1,num2,num3,num4){
	if(!num1[0] || typeof num1[0] !== "number"){
		return (NaN);
	}
var average = ((num1[0]+num2[1]+num3[2]+num4[3])/4).toFixed(4)
return(average)
}


*/













