var input = prompt("Enter your name, please");

document.getElementById('name').innerHTML = "The name of your Dinosaur is: " + input;
var changeColor = document.getElementById('name');
changeColor.style.color = prompt('Give me a color');