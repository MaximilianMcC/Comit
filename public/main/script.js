document.addEventListener("DOMContentLoaded", () => generateStars());



function generateStars() {
	const svg = document.querySelector("svg");
	let starsSvg = ``;

	// Make a star
	// TODO: Don't use arrow function, but idk
	const star = () => {
		//! Don't do this. Use real decimal random method
		// Get a random radius
		// TODO: Do another way
		const radiuses = [0.3, 0.4, 0.5, 0.6, 0.7];
		const radius = randomElement(radiuses);

		// Get a random color for the star
		// TODO: Maybe make the stars subtlety twinkle
		// TODO: Maybe make the svg stars interact with mouse cursor. Get pushed out of the way or something
		const colors = ["#dad4d4", "#ffd6d6", "#ffffff"];
		const color =  randomElement(colors);

		//! Don't use 140 as max X. Should be 100 but svg messed up
		return `<circle cx="${random(60, 140)}" cy="${random(0, 100)}" r="${radius}" fill="${color}"/>`;
	};

	// Make a random amount of stars
	for (let i = 0; i < random(5, 15); i++) {
		starsSvg += star();
	}

	// Add the stars to the svg
	svg.innerHTML += starsSvg;
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomElement(array) {
	return array[random(0, array.length - 1)];
}