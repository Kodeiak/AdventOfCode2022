// sort through input to find duplicate items and add up priority
// each line is a different rucksack
// each rucksack has two compartments
    // the first half of the line is comp 1
    // the seecond half of the line is comp2
// a-z == priority 1-26
// A-Z == priority 27-52

const input = document.getElementsByTagName('pre')
const rucksacks = input[0].textContent.split(/[\n]/).filter(n => n)
let sum = 0;

let getPriority = char => {
  /* console.log(char); */
	let value = 0;
  if (char) {
  	let code = char.charCodeAt();
  	code > 95 ? value = code - 96 : value = code - 38;
  }  
  return value;
}

rucksacks.forEach((items, i) => {

	let compSize = items.length / 2;
  let comp1 = items.slice(0,compSize).split("");
  let comp2 = items.slice(compSize).split("");

	let dupeItem = comp1.filter(item => comp2.includes(item))[0]; 

  if ( dupeItem ) {
  	sum += getPriority(dupeItem);
  }
})

console.log(sum);

