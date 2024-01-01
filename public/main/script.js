document.addEventListener("DOMContentLoaded", () => generateStars());



function generateStars() {
	const svg = document.querySelector("svg");
	let starsSvg = ``;

	// Make a star
	// TODO: Don't use arrow function, but idk
	const star = () => {

		//! Do NOT use this (prolly beyond bad practice)
		const radiuses = [0.3, 0.4, 0.5, 0.6, 0.7];
		const radius = radiuses[random(0, radiuses.length - 1)];

		return `<circle cx="${random(60, 100)}" cy="${random(0, 100)}" r="${radius}" fill="white"/>`;
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