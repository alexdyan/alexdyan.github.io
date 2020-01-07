/* dark mode */

let hour = new Date().getHours();
let navigationLinks = document.getElementsByClassName("nav");

//invert the background, text, and link colors at night
if (hour >= 20 || hour < 6) {
	let background = document.querySelector("body");
	background.style.backgroundColor = "black";

	let mainText = document.querySelector("main");
	mainText.style.color = "white";

	let mainLinks = document.querySelectorAll("p > a");
	for (var i = 0; i < mainLinks.length; i++) {
		mainLinks[i].style.color = "white";
	}

	for (var i = 0; i < navigationLinks.length; i++) {
		navigationLinks[i].style.color = "white";
	}

	let imageBorders = document.getElementsByTagName("img");
	for (var i = 0; i < imageBorders.length; i++) {
		imageBorders[i].style.border = "1px solid #fa3e3e";
	}

	let breakers = document.getElementsByClassName("breaker");
	for (var i = 0; i < breakers.length; i++) {
		breakers[i].style.border = "1px solid grey";
		breakers[i].style.backgroundColor = "grey";
	}

	let backButtons = document.getElementsByClassName("backButton");
	for (var i = 0; i < backButtons.length; i++) {
		backButtons[i].style.color = "grey";
	}
}


//functions to color the navigation button the user is hovering over
function fillButtons() {
	for (var i = 0; i < navigationLinks.length; i++) {
		if (hour >= 20 || hour < 6)
			navigationLinks[i].style.backgroundColor = "black";
		else
			navigationLinks[i].style.backgroundColor = "white";
	}

	this.style.backgroundColor = "#fa3e3e";
}

function resetButtons() {
	for (var i = 0; i < navigationLinks.length; i++) {
		if (hour >= 20 || hour < 6)
			navigationLinks[i].style.backgroundColor = "black";
		else
			navigationLinks[i].style.backgroundColor = "white";
	}
}

//event listeners
for (var i = 0; i < navigationLinks.length; i++) {
	navigationLinks[i].addEventListener("mouseover", fillButtons);
	navigationLinks[i].addEventListener("mouseout", resetButtons);
}

