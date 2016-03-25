var num1;
var num2;


function num2arr(num1,num2) {
	var add2 = num1+num2;
	var mult2 = num1*num2;
	var array = [add2, mult2];
	
	console.log(array);
	
}


function numCompare(num1,num2){
	if (num1 > num2) {
		console.log("larger");
	}
	else if (num1 < num2) {
		console.log("smaller"); 
	}
	else if (num1 = num2) {
		console.log("equals");
	}
}

function fizzBuzz() {
	for (var i = 0; i <= 10; i++){
		if (i %3 === 0 && i %5 === 0){
			
			console.log("fizzBuzz");
		}
		else if (i %3 === 0){
			console.log("fizz");
		}
		else if (i %5 === 0) {
			console.log("Buzz");
		}
		else {
			console.log(i);
		}
			
	}

}

function upperLower(str){
	if (str === str.toUpperCase()){
		console.log("True");
	}
	else {
		console.log("False");
	}
}

function starr(str){
	var arr =[];
	for (var i = 0; i <str.length; i++){
		arr.push(str[i]);
	}
	console.log(arr);
}


















