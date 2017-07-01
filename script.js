
//List of words for the game
var bands = ["opeth", "mastodon", "ghost", "scale the summit", "tool", "amon amarth"];
//This will chose a random word that is to be guessed
var random = bands[Math.floor(Math.random() * bands.length)]; //Selects a random word from list above

var s;
var count = 0;				// Number of clicks
var answer = [];			// Placeholder for correct answer
var hints;					// Varible for Hints Function

var showClue = document.getElementById("clue");		// To add the hints to the HTML to be displayed
var getHint = document.getElementById("hint");		// To add hints to HTML to be displayed
console.log(random);

//Startup Function, that decides the next word and puts the "_" in place for each letter
function startUp() {
	for (var i = 0; i < random.length; i++) {
		answer[i] = "_";}

	s = answer.join(" ");
	document.getElementById("answer").innerHTML = s;



};

	// Function for the Guess Button
	function Letter () {
	var letter = document.getElementById("letter").value;

	if (letter.length > 0) {
		for (var i = 0; i < random.length; i++) {
			if (random[i] === letter) {
				answer[i] = letter;}
		}
		count++;
		document.getElementById("count").innerHTML = "Number of Clicks: " + count;
		document.getElementById("answer").innerHTML = answer.join(" ");

	}
};

	// Hints
	hint.onclick = function() {
		var hintIndex = answer.indexOf(bands);
		showClue.innerHTML = "Hint - " + answer [hintIndex];

		if (random == bands[0]) {
			showClue.innerHTML = "Hint - Their most recent release, Sorceress, features a Peacock on the album sleeve.";
		} else if (random == bands[1]) {
			showClue.innerHTML = "Hint - This Georgia based metal act's most recent album, Emperor of Sand, was released in 2016";
		} else if (random == bands[2]) {
			showClue.innerHTML = "Hint - The frontman of this band goes by the name Papa Emeritius, and dresses like an Evil Pope";
		} else if (random == bands[3]) {
			showClue.innerHTML = "Hint - This American metal band is completely instrumental and uses the tag line, Their strings are their voices";
		} else if (random == bands[4]) {
			showClue.innerHTML = "Hint - This bands 1996 release, Aenima, won the Grammy for best metal performance";
		} else if (random == bands[5]) {
			showClue.innerHTML = "Hint - This band from Norway, features a Viking battleship during their live performances";
		}

		
	};









