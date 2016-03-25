

var a = document.createElement("a");
        console.log(a);
    
 a.textContent = "I'm a link to google";
        console.log(a);

 
 a.setAttribute("href", "http://www.google.com");
        console.log(a);

		a.style.backgroundColor = "red";
		a.style.color ="white";
		a.style.padding ="10px";
		a.style.borderRadius ="30px";
		a.style.textDecoration ="none";

setTimeout(function () {
        document.body.appendChild(a);
        }, 2000);

 function e(elementType, text, attributes, styles) {
        var newElement = document.createElement(elementType);
        newElement.textContent = text;
 
        //set the attributes on the tag
        for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i];
        newElement.setAttribute(attr[0], attr[1]);
        }
 
        //set the styles
        for (var j = 0; j < styles.length; j++) {
        var style = styles[j];
        newElement.style[style[0]] = style[1];
        }
 
        return newElement;
        }
 
        var a = e("a", "link to google", [['href', "http://www.google.com"]], [['color', "red"]]);
        document.body.appendChild(a);









