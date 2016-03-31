  
   document.getElementById("myul").addEventListener("click", function (evt) {
     console.log(this);
     console.log(evt);
	 alert(evt.target.textContent);
   });

var nums = [{x: 4}, {x: 1},{x: 3}];
        nums.sort(function (a, b) {
        //inspect a and b to determine how things should be sorted
		return a.x-b.x;
        });
console.log(nums);












