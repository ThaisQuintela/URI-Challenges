//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = "22\n67";

const lines = input.split('\n');

const hours = parseInt(lines.shift());
const speed = parseInt(lines.shift());

const total = ((hours * speed) / 12).toFixed(3);

console.log(total);