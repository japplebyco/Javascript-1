
		listObjs = [];
		var div = document.getElementById("listDiv");
		function printList() {
		div.innerHTML = "";
        for(var i = 0; i < listObjs.length; i++) {
            var list = listObjs[i];
            var a = document.createElement("p");
			console.log(list);
            a.textContent = [i]+".) "+list.title;
          
            a.setAttribute("style", "color:#119811;");
            a.addEventListener("click", function () {
                
            });
			div.appendChild(a);
			}
			
        }
		function deleteList(){
			var div = document.getElementById("listDiv");
			div.innerHTML = "";
		} 
		
		var form = document.getElementById("newForm");
 
        form.addEventListener("submit", function (evt) {
			
            var lists = document.getElementById("Title").value;
			var input = document.getElementsByName("input");
			console.log(input);			
			var input;
 
			for (var j = 0; j < input.length; j++) {
			var inputs = input[j];
			if (inputs.checked) {
            input = inputs.value;
          }
        }
 
			
			var newlist = {title: lists};
			listObjs.push(newlist);
			deleteList();
			printList();
			evt.preventDefault();
			
        });
		
		 printList();
		
		
		
		
		
		
		
		
		
		
		
		
		