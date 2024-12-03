// Task 1 - Declaring an array

const favouriteSongs = [
  "Tiny Dancer",
  "Running Up That Hill",
  "Don't Stop Moving",
  "Tragedy",
  "Crazy Horses",
];

const pyramidScheme = [1, 2, 4, 8, 16, 32, 64];

const friends = [
  "Name is Chris; special skill is changing lives.",
  "Name is Lizzie; special skill is being friendly.",
  "Name is Ben; special skill is code rapping.",
  "Name is Tao; special skill is hand raising.",
  "Name is Liz; special skill is crochet.",
  "Name is Patrick; special skill is Call of Duty.",
  "Name is Tim; special skill is analogies.",
  "Name is James; special skill is friendship.",
  "Name is Joseph; special skill is being positive.",
  "Name is Max; special skill is papier-mache.",
];

// Task 2 - Reading Array values
let options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
/* 👉 Console.log the month in which you were born.
 
👉 Console.log the month your mother was born.

👉 Console.log your favorite month. */
console.log(options[5]);
console.log(options[8]);
console.log(options[10]);

// Task 3 - Looping and Accessing

let englishNumbers = ["one", "two", "three", "four", "five"];

let indexVariable = 0;

/* while (englishNumbers.length > indexVariable) {
  console.log(englishNumbers[indexVariable], indexVariable);
  indexVariable++;
}
 */

// Task 4 - Using a for loop instead

for (i = indexVariable; i < englishNumbers.length; i++) {
  console.log(englishNumbers[i], i);
}

// Task 5 - Looping and Reassinging

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

for (let i = 0; i < words.length; i++) {
  words[i] = words[i] + "t";
}

console.log(words);
