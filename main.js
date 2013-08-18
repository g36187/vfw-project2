// DOMcheck
window.addEventListener("DOMContentLoaded", function(){

/* Define each list item variable */

var itemType = document.getElementById("dropList");
var whatName = document.getElementById("itemName");
var numberOf = document.getElementById("howMany");
var handable = document.getElementById("theForm").handy;
var notes = document.getElementById("textNotes");

/* Test call each id 

console.log (itemType.value);
console.log (whatName.value);
console.log (numberOf.value);
console.log (handable);
console.log (notes.value);

*/

/* radio collector */

var checkValue = function(){
	for (c=0, j=handable.length; c<j; c++){
		if (handable[c].checked){
			localStorage.setItem("Carried By Hand", handable[c].value);
		}
	}
};

/* local storage set */

var takeInput = function (){
	localStorage.setItem("Item Type", itemType.value);
	localStorage.setItem("Item Name", whatName.value);
	localStorage.setItem("How Many", numberOf.value);
	checkValue();
	localStorage.setItem("Notes", notes.value);
}

// use this to test inputs
/* itemType.addEventListener("blur", takeInput);
whatName.addEventListener("blur", takeInput);
numberOf.addEventListener("blur", takeInput);
notes.addEventListener("blur", takeInput);
*/

/* submit button */

submit.addEventListener("click", takeInput);

//test area
console.log (handable[0]);

/* extract local storage

for (i=0, stori=localStorage.length; i<stori; i++){
	console.log(localStorage.key(i));
}

*/

//End of DOM check
});
