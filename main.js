/* Define each list item variable */

var itemType = document.getElementById("dropList");
var whatName = document.getElementById("itemName");
var numberOf = document.getElementById("howMany");
var handable = document.getElementById("checkYesNo");
var notes = document.getElementById("textNotes");

/* Test call each id */

console.log (itemType.value);
console.log (whatName.value);
console.log (numberOf.value);
console.log (handable.value);
console.log (notes.value);

/* Event listeners */

var getValue = function(){
	console.log(whatName.value);
}
whatName.addEventListener("blur", getValue);
