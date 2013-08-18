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
	
/* extract data for show */
function showYou(){
	var makeDiv = document.createElement('div');
	makeDiv.setAttribute("id", "items");
	var makeList = document.createElement('ul');
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv);

	for (i=0, stori=localStorage.length; i<stori; i++){
		var makeli = document.createElement('li');
		makeList.appendChild(makeli);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var makeSubList = document.createElement('ul');
		makeli.appendChild(makeSubList);
		
		for (var n in obj){
			var makeSubli = document.createElement('li');
			makeSubList.appendChild(makeSubli);
			var optSubText = obj[n][0]+" : "+obj[n][1];
			makeSubli.innerHTML = optSubText;
		}
	}
}	
/* important buttons */

var emptiness = function (){
	localStorage.clear();
}

cleary.addEventListener("click", emptiness);
submit.addEventListener("click", storeData);
displaya.addEventListener("click", showYou);

//test area


//End of DOM check
});
