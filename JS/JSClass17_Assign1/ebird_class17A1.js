/*
While this works, and would be good if there were a lot of inputs, it's more than what's needed for this exercise.

function getFormValue(){
	var x = document.getElementById('names');
	var text = " ";
	for(var i = 0; i < x.length - 1; i++){
		text += x.elements[i].value + " ";
	}
	document.getElementById('display').innerHTML = "Hello " + text + " ";
}*/


//create function
function getFormValue() {
	//In the h1 'display' write 'Hello' and the values of the fname and lname
	document.getElementById('display').innerHTML = "Hello " + fname.value + " "  + lname.value;
}