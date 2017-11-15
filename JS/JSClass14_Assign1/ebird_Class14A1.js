var allNums = [];
var num1 = parseInt(prompt('Please type a number.'));
var num2 = parseInt(prompt('Please type a number.'));
var num3 = parseInt(prompt('Please type a number.'));
allNums.push(num1);
allNums.push(num2);
allNums.push(num3);

document.getElementById('list').innerHTML = "Your original numbers are: " + allNums.join(", ");

if(num1 > num2 && num1 > num3){
	document.getElementById('compare').innerHTML = "Your first choice, number: " + num1 + " is the highest number."
}else if(num2 > num1 && num2 > num3){
	document.getElementById('compare').innerHTML = "Your second choice, number: " + num2 + " is the highest number."
}else{
	document.getElementById('compare').innerHTML = "Your third choice, number: " + num3 + ", is the highest number."
}