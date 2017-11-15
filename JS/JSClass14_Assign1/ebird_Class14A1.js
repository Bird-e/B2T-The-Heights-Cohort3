//Array for display
var allNums = [];
//User Input
var num1 = parseInt(prompt('Please type a number.'));
var num2 = parseInt(prompt('Please type a number.'));
var num3 = parseInt(prompt('Please type a number.'));
//Adding user input to array
allNums.push(num1);
allNums.push(num2);
allNums.push(num3);

//Displaying array in order of first to last
document.getElementById('list').innerHTML = "Your original numbers are: " + allNums.join(", ");
//if the first number is greater than both the second and the third, say the first is the highest number
if(num1 > num2 && num1 > num3){
	document.getElementById('compare').innerHTML = "Your first choice, number: " + num1 + " is the highest number."
}else if(num2 > num1 && num2 > num3){
	//if the second number is greater than both the first and the third, say the second is the highest number
	document.getElementById('compare').innerHTML = "Your second choice, number: " + num2 + " is the highest number."
}else{
	//if the first and second numbers are not greater than the third, say the third is the highest number
	document.getElementById('compare').innerHTML = "Your third choice, number: " + num3 + ", is the highest number."
}