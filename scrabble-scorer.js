// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			console.log(`Points for '${word[i]}': ${pointValue}\n`)
		 }
    letterPoints += Number(pointValue);
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let userInput = "";
function initialPrompt() {
   userInput = input.question("Let's play some scrabble! Enter a word: ").toLowerCase();
  //console.log(scorerPrompt(userInput));
   return userInput;
};

//let simpleScore;

function simpleScore(word) {
 let simple = 0;
 for (let i = 0; i < word.length; i++) {
   simple = simple + 1;
 }
 return simple;
}


function vowelBonusScore(word) {
  let vowelArr = ["a","e","i","o","u"];
  let vowelScore = 0;

for (let i = 0; i < word.length; i++){
//vowelArr = oldPointStructure[1].slice(0,4);
//console.log(word[i]);
if (vowelArr.includes(word[i])){
vowelScore = vowelScore + 3;
} else {
  vowelScore += 1;
}
//console.log(vowelScore);
//console.log(vowelArr);
}

return vowelScore;
}
//console.log(vowelArr);



let scrabbleScore;

//const scoringAlgorithms = [simpleScr, vowelBoScr, scrabbleScr];

let simpleScr = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
};

let vowelBoScr = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
};

let scrabbleScr = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore 
};

const scoringAlgorithms = [simpleScr, vowelBoScr, scrabbleScr];

function scorerPrompt() {
    //*console.log(`\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system \nEnter 0, 1, or 2:`);
    let userNum = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system \nEnter 0, 1, or 2 ");

   return userNum;
}

 


function transform() {
//for (const newPointValue in oldPointStructure) {

}
//};

let newPointStructure = {

}



function runProgram() {
   initialPrompt();
  let scorePr = scorerPrompt();
  console.log("algorithm name: ", scoringAlgorithms[scorePr].name);
  console.log("scorerFunction result: ", scoringAlgorithms[scorePr].scoringFunction(userInput));


   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

