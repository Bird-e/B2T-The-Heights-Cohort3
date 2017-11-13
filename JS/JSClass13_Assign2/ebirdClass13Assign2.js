var fruit = [];

var input = prompt('Enter a fruit please:');
fruit.unshift(input);
var input2 = prompt('Enter a fruit please:');
fruit.push(input2);
var input3 = prompt('Enter a fruit please:');
fruit.push(input3);

document.getElementById('fruitList').innerHTML = "Your fruit shopping list is: " + fruit.join(" and a(n) ");