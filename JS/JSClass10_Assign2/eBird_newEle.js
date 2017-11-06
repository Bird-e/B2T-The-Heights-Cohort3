//console.log("Elisha Bird says Hello World!");


//console.log("My favorite color is " + prompt("Please type your favorite color."));
//Gets list of all h1 elements in my webpage
//var h1Elements = document.getElementsByTagName('h1');
var myPie = document.getElementById('pie');
//console.log(myPie);
//This changes the h1 text in 'h1 id='pie'.
myPie.innerHTML = 'He likes Cherry Pie, but he will accept brownies instead.';
//This asks the user to choose the color of the new text in h1 id='pie'.
myPie.style.color = prompt('Give me a color');
//This adds text to the h2 id='newtext'.
document.getElementById('newtext').innerHTML = 'Poor Trey, he has to settle on his birthday! =(';
