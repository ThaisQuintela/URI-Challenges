//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = "10\nOBO URU";

const lines = input.split('\n');

const words = lines[1].split(" ");
const output = [];

// console.log(lines, words);
for (i = 0; i < words.length; i++) {
  const word = words[i];
  if (words[i].length === 3) {
    if (word.charAt(0) === "U" && word.charAt(1) === "R") {
      output[i] = "URI";
    } else if (word.charAt(0) === "O" && word.charAt(1) === "B") {
      output[i] = "OBI";
    } else {
      output[i] = word;
    }
  } else {
    output[i] = word;
  }
}
console.log(output.join(" "));
