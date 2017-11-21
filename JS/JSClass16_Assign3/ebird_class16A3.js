
//array
var colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'];
o = ['th', 'st', 'nd', 'rd'];
//first initialize, then condition, then increment
for(var i = 0; i < colors.length; i++){
	//if it's the first one add 'st'
	if(i == 0){
		document.getElementById('display').innerHTML += '1'+o[1] + ' choice is ' + colors[i] + '<br />';
	//if it's the second add 'nd'
	}else if(i == 1){
		document.getElementById('display').innerHTML += '2'+o[2] + ' choice is ' + colors[i] + '<br />';
	//if it's the third add 'rd'
	}else if(i == 2){
		document.getElementById('display').innerHTML += '3'+o[3] + ' choice is ' + colors[i] + '<br />';
	//everything else add 'th'
	}else{
		document.getElementById('display').innerHTML += i+ 1 +o[0] + ' choice is ' + colors[i] + '<br />';
	}
	
}


