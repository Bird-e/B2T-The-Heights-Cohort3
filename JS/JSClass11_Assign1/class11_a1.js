//Get a name from the user
var input = prompt("Enter your name, please");
//Target the html h1 with the id of 'name'
//Add the text 'The name of your Dinosaur is:' plus the name provided by the user
document.getElementById('name').innerHTML = "The name of your Dinosaur is: " + input;
//Targets the element with the id of 'name'
var changeColor = document.getElementById('name');
//Change the color of the text of 'name'
changeColor.style.color = prompt('Give me a color');