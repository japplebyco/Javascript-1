"use strict";


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
















