//Initialize
var i = 1;
//Condition
while(i <= 100){
	//if it's divisible by 3 & 5 write FizzBuzz
	if(i%3 == 0 && i%5 == 0){
		document.getElementById('answer').innerHTML += '<i style="color:#ff0000">FIZZBUZZ!</i><br /> ';
	//if it's divisible by 5 write Buzz
	}else if(i%5 == 0){
		document.getElementById('answer').innerHTML += '<em style="color:#000000">BUZZ</em><br />';
	//if it's divisible by 3 write Fizz
	}else if(i%3 == 0){
		document.getElementById('answer').innerHTML += '<strong style="color:#00ff00">FIZZ</strong><br />';
	//if it's not divisible by 3 or 5 just write the number
	}else{
		document.getElementById('answer').innerHTML += i + '<br />';
	}
	//increment
	i++;
}