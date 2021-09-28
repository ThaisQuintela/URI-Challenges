//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const string = "25\n100\n5.5";

const input = string;
const lines = input.split('\n');

const number = parseInt(lines.shift());
const hours = parseFloat(lines.shift());
const price = parseFloat(lines.shift());

const result = (hours * price).toFixed(2);

console.log(`NUMBER = ${number}\nSALARY = U$ ${result}`);