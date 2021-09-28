//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = "217 14 6";

const line = input.split(" ");

const A = parseFloat(line.shift());
const B = parseFloat(line.shift());
const C = parseFloat(line.shift());

const bigger = (A + B + Math.abs(A - B)) / 2;

const biggest = (bigger + C + Math.abs(bigger - C)) / 2;

console.log(`${biggest} eh o maior`);