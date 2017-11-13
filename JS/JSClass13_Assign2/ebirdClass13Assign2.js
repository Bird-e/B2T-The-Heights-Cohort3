//created an array of fruit
var fruit = ["apple", "orange", "kiwi"];
//Get more fruits from the user and puts them at the end of the array. Makes them all lowercase
var input = prompt('Add more fruit').toLowerCase();
fruit.push(input);
var input2 = prompt('Add more fruit').toLowerCase();
fruit.push(input2);
var input3 = prompt('Add more fruit').toLowerCase();
fruit.push(input3);
//Shows the user the original array, unsorted
document.getElementById('original').innerHTML = "Your original list is: " + fruit.join(", ");
//sorts the array by alphabetical orders
fruit.sort();
//outputs the array in the h1 with the id of 'fruitList' shows the list in alphabetical order seperated by 'with'
document.getElementById('fruitList').innerHTML = "Your alphbetically sorted fruit salad will have: " + fruit.join(" with ") +".";