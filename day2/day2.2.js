/*
A = Rock
B = Paper
C = Scissors

X = need to lose
Y = need to draw
Z = need to win

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
let R = 1;
let P = 2;
let X = 3;

// loop through rounds
for (let i = 0; i < rounds.length; i++) {
// for each round, 
let myHand = rounds[i][2];
let theirHand = rounds[i][0];
	//look at own hand
  switch (myHand) {
      // need to lose
      case "X":
      	score += 0;
				switch (theirHand) {
        	case "A":
						// R>X 
            score += X;
            break;
          case "B":
          	// P>R
            score += R;
            break;
          case "C":
          	// X>P
          	score += P;
            break;
        }
        break;
	    // need to draw
      case "Y":
      	score += 3;
				switch (theirHand) {
        	case "A":
						// R 
						score += R;
            break;
          case "B":
          	// P
            score += P;
            break;
          case "C":
          	// X
          	score += X;
            break;
        }
        break;
	    // need to win
      case "Z":
      	score += 6;
				switch (theirHand) {
        	case "A":
						// R<P 
            score += P;
            break;
          case "B":
          	// P<X
            score += X;
            break;
          case "C":
          	// X<R
          	score += R;
            break;
        }
        break;
  }
}

console.log(score);