
var dinoArr = [];

function dino1(type, era, food) {
	
	var abc = [type, era, food];
	return abc;
}

function dino2() {
	var type;
	var era;
	var food;
	
	var question = parseInt (prompt("How many dinosaurs would you like to enter?"));
	

		if (question === 0 || question === NaN){
			alert("enter a number")
			question;
			console.log(question);
		}
		else {
			for(var i = 1; i<=question; i++){
				
				var type = prompt("type?");
				var era = prompt("era?");
				var food = prompt("food?");
				var dino2 = dino1(type, era, food)
				dinoArr.push(dino2);
	console.log(dino2);
	console.log(dinoArr);
			
			
		}
		for(var i = 0; i<question; i++) {
			var dType = dinoArr[i][0];
			var dEra = dinoArr[i][1];
			var dFood = dinoArr[i][2];
			console.log(dType + ", " + dEra + ", " + dFood + ", " );
			
		}
	}
	 
	
	

}


dino2();