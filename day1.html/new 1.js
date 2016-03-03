var enter = confirm("You are outside a forest cabin. Press OK to enter.");

if(enter)
{
	var bowls = prompt("You see three bowls of porridge. Eat bowl 1, 2, or 3?");
	
	bowls = parseInt(bowls);
	
	switch(bowls)
	{
		default: 
			alert("You starved. THE END!");
			break;
		
		case 1: 
			alert("It's too hot! THE END!");
			break;
		
		case 2:
			alert("It's too cold! THE END!");
			break;
			
		case 3:
			alert("It's delicious!");
			
			var hours = "The porridge makes you sleep. Nap for how many hours?";
			var sleep = prompt(hours);
			
			sleep = parseInt(sleep);
			
			if (sleep < 2) {
				
				alert("You wake just in time, and scamper away! You WIN!");
			} else {
				
				alert("You sleep to late, and are eaten by hungry bears.");
			}
			alert("THE END.");	
	}
}
else
{
	
    alert("And that's the world's shortest story. THE END.")
}
