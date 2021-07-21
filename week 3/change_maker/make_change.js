var $ = function(id) {
    return document.getElementById(id);
};

//PROCESS ENTRY EVENT HANDLER//
//VERIFIES USER INPUT IS BETWEEN 0-99//
//IF VALID, RUNS MAKE CHANGE FUNCTION//
//DISPLAYS ERROR MESSAGE IF INVALID//
function processEntry()  {
	var cents = document.getElementById("cents").value;
	if(cents >= 0 && cents <= 99){
	makeChange(cents);
	}
	else{
		alert("Value should be between 0 and 99");
		document.getElementById("quarters").value = "";
		document.getElementById("dimes").value = "";
		document.getElementById("nickels").value = "";
		document.getElementById("pennies").value = "";
	}
}

//MAKE CHANGE FUNCTION//
//DETERMINES AMOUNT OF QUARTERS, DIMES, NICKELS, AND PENNIES NEEDED//
function makeChange(cents){
	var quarters = parseInt(cents/25);
	cents = cents % 25;
	var dimes = parseInt(cents/10);
	cents = cents % 10;
	var nickels = parseInt(cents/5);
	cents = cents % 5;
	var pennies = parseInt(cents/1);
	document.getElementById("quarters").value = quarters;
	document.getElementById("dimes").value = dimes;
	document.getElementById("nickels").value = nickels;
	document.getElementById("pennies").value = pennies;
}

