/*
A || X = Rock
B || Y= Paper
C || Z = Scissors

Rock = 1pt
Paper = 2pt
Scissors = 3pt

Loss = 0pt
Draw = 3pt
Win = 6pt
*/

let input = document.getElementsByTagName("pre");
let rounds = input[0].textContent.split(/[\n]/).filter(n => n);
let score = 0;

// loop through rounds
for (let i = 0; i < rounds.length; i++) {
// for each round, 
let myHand = rounds[i][2];
let theirHand = rounds[i][0];
	//look at own hand
  switch (myHand) {
      // if my hand == rock, score += 1
      case "X":
	      score += 1;
				switch (theirHand) {
        	case "A":
          	score += 3;
            break;
          case "B":
          	score += 0;
            break;
          case "C":
          	score += 6;
            break;
        }
        break;
	    // paper, score += 2
      case "Y":
      	score += 2;
      	switch (theirHand) {
        	case "A":
          	score += 6;
            break;
          case "B":
          	score += 3;
            break;
          case "C":
          	score += 0;
            break;
        }
        break;
	    // scissors, score +=
      case "Z":
      	score += 3;
      	switch (theirHand) {
        	case "A":
          	score += 0;
            break;
          case "B":
          	score += 6;
            break;
          case "C":
          	score += 3;
            break;
        }
        break;
  }
}

console.log(score);
  

  