//Initialize
var i = 1;
//Condition
while(i <= 15){
	//if even
	if(i%2 == 0){
		document.getElementById('answer').innerHTML += i + ' is an even number.<br /> ';
	//if odd
	}else{
		document.getElementById('answer').innerHTML += i + ' is an <i>odd</i> number. <br />';
	}
	//increment
	i++;
}