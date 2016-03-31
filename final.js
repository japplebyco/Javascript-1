
		listObjs = [];
		var div = document.getElementById("listDiv");
		function printList() {
		div.innerHTML = "";
        for(var i = 0; i < listObjs.length; i++) {
            var list = listObjs[i];
            var a = document.createElement("h2");
			console.log(list);
            a.textContent = [i+1]+".) "+list.title;
            a.setAttribute("style", "color:#ffffa1;");
            a.addEventListener("click", function () {
            });
			div.appendChild(a);
			a.addEventListener("click", function (evt) {
			div.removeChild(evt.target);
			alert("you deleted: " + evt.target.textContent);
			})
			
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
		 