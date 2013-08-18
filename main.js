// DOMcheck
window.addEventListener("DOMContentLoaded", function(){

/* Define each list item variable */

var itemType = document.getElementById("dropList");
var whatName = document.getElementById("itemName");
var numberOf = document.getElementById("howMany");
var notes = document.getElementById("textNotes");
var handyVal;

/* Test call each id 

console.log (itemType.value);
console.log (whatName.value);
console.log (numberOf.value);
console.log (handable);
console.log (notes.value);

*/

/* radio collector */

function checkValue(){
	var handable = document.getElementById("theForm").handy;
	for (var i=0; i<handable.length; i++){
		if (handable[i].checked){
			handyVal = handable[i].value;
		}
	}
}

/* local storage set 

var takeInput = function (){
	localStorage.setItem("Item Type", itemType.value);
	localStorage.setItem("Item Name", whatName.value);
	localStorage.setItem("How Many", numberOf.value);
	checkValue();
	localStorage.setItem("Notes", notes.value);
}
*/

/* actual local data storage */

function storeData(){
	checkValue();
/* random keygen and gather data for unique local data */

	var id 			= Math.floor(Math.random()*9001);
	var item		= {};
		item.itype  = ["Item Type", itemType.value];
		item.iname  = ["Item Name", whatName.value];
		item.inumber= ["How Many", numberOf.value];
		item.ihand  = ["Carried By Hand", handyVal];
		item.inotes = ["Notes", notes.value];
	
/* stringify for local storage */
	localStorage.setItem (id, JSON.stringify(item)); 	
	alert("Information Submitted");
}
	
	
	
	
/* important buttons */

var showMe = function (){
	for (i=0, stori=localStorage.length; i<stori; i++){
		console.log(JSON.parse(i));
	}
}

var emptiness = function (){
	localStorage.clear();
}

cleary.addEventListener("click", emptiness);
submit.addEventListener("click", storeData);
displaya.addEventListener("click", showMe);

//test area


//End of DOM check
});
