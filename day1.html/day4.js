"use strict";

var name = prompt ("enter your first name all lowercase:");
name = capitalize(name);
console.log(name);
	
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

