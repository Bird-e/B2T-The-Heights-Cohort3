
//create function
function insertRow(){
	//choose the table
	var table = document.getElementById('myTable');
	//create a row in the table
	var row = table.insertRow(0);
	//create the first cell at index 0
	var cell1 = row.insertCell(0);
	//create the second cell at index 1
	var cell2 = row.insertCell(1);

	//use the value of col1 to fill text in the first cell
	cell1.innerHTML = col1.value;
	//use the value of col2 to fill the text in the second cell
	cell2.innerHTML = col2.value;
}

