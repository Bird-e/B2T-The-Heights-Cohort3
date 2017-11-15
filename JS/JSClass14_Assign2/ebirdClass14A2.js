//array 'grade'
var grade = [80, 77, 88, 95, 68];
//adding the numbers in the array and dividing the sum by the length of the array to get the average
var average = eval( grade.join('+') )/grade.length;
//showing the student average
console.log('The student has an average of: ' + average);
if(average < 60){
	//if the average is below 60 then the student has failed
	console.log("The Student has a letter grade of F. The Student has failed.");
}else if(average >= 60 && average <= 69){
	//if the average is between 60 and 69 they have a D
	console.log("The Student has a letter grade of D. The Student is below average.");
}else if(average >= 70 && average <= 79){
	//if the average is between 70 and 79 they have a C
	console.log("The Student has a letter grade of C. The Student is average.");
}else if(average >= 80 && average <= 89){
	//if the average is between 80 and 89 they have a B
	console.log("The Student has a letter grade of B. The Student is above average.");
}else{
	//if the average is above 89 they have an A
	console.log("The Student has a letter grade of A. The Student has excelled in the class!");
}