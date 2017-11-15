switch(new Date().getDay()){
	//for Sunday
	case 0:
		document.getElementById('welcome').innerHTML = 'Today is Sunday. Time to rest and relax.';
		break;
	//for Monday
	case 1:
		document.getElementById('welcome').innerHTML = 'Today is Monday. We are so sorry!';
		break;
	//for Tuesday
	case 2:
		document.getElementById('welcome').innerHTML = 'Today is Tuesday. Well, at least it is not Monday.';
		break;
	//for Wednesday
	case 3:
		document.getElementById('welcome').innerHTML = 'Today is Wednesday. Happy Hump Day!';
		break;
	//for Thursday
	case 4:
		document.getElementById('welcome').innerHTML = 'Today is Thursday. Hang on, you are almost there...';
		break;
	//for Friday
	case 5:
		document.getElementById('welcome').innerHTML = 'Today is Friday. FINALLY!';
		break;
	//for Saturday
	case 6:
		document.getElementById('welcome').innerHTML = 'Today is Saturday. Go wild, pretend you are in Vagas.';
		break;
	//as the argument is a set value of 0-6, no default case is needed but it was added for fun
	default:
		document.getElementById('welcome').innerHTML = 'This day does not exist. Armaggeddon has happened. Have a happy afterlife. Goodbye.';
		break;
}