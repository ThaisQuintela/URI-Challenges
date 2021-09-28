//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = "-25.00";

const A = parseFloat(input);

if (A >= 0 && A <= 25) {
  console.log("Intervalo [0,25]");
} else if (A > 25 && A <= 50) {
  console.log("Intervalo (25,50]");
} else if (A > 50 && A <= 75) {
  console.log("Intervalo (50,75]");
} else if (A > 75 && A <= 100) {
  console.log("Intervalo (75,100]");
} else {
  console.log("Fora de intervalo");
}
