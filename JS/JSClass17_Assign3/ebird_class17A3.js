//Create an array of objects
var library = [
{author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},
{author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true},
{author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of the Hunger Games', readingStatus: false}
];

//for loop to go through the array of objects
for(var i = 0; i < library.length; i++){
	//if the object's readingStatus is true, write in the h1 'answer' the title, author and that the user has read the book
	if(library[i].readingStatus == true){
		document.getElementById('answer').innerHTML += 'Already read: ' + library[i].title + ' by ' + library[i].author + '<br>';

	//if the object's readingStatus is false, write in the h1 'answer' the title, author and that the user needs to read the book
	}else{
		document.getElementById('answer').innerHTML += 'You still need to read: ' + library[i].title + ' by ' + library[i].author + '<br>';
	}
}