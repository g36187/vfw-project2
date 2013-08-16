/* Define each list item variable */

var itemType = document.getElementById("dropList");
var whatName = document.getElementById("itemName");
var numberOf = document.getElementById("howMany");
// var handable = document.getElementById("content").HandCarried;
var notes = document.getElementById("textNotes");
// var areYouSure = document.getElementById("submitter");

/* Test call each id */

console.log (itemType.value);
console.log (whatName.value);
console.log (numberOf.value);
// console.log (handable.value);
console.log (notes.value);
// console.log (areYouSure.value);


/* local storage */

var takeInput = function (){
	localStorage.setItem("Item Type", itemType.value);
	localStorage.setItem("Item Name", whatName.value);
	localStorage.setItem("How Many", numberOf.value);
//	localStorage.setItem("Carried By Hand", handable.value);
	localStorage.setItem("Notes", notes.value);
}

itemType.addEventListener("blur", takeInput);
whatName.addEventListener("blur", takeInput);
numberOf.addEventListener("blur", takeInput);
// handable.addEventListener("blur", takeInput);
notes.addEventListener("blur", takeInput);

/* look at local storage */

for (i=0, stori=localStorage.length; i<stori; i++){
	console.log(localStorage.key(i));
}
