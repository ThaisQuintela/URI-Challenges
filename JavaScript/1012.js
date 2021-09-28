//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = "12.7 10.4 15.2";

const line = input.split(" ");

const A = parseFloat(line.shift());
const B = parseFloat(line.shift());
const C = parseFloat(line.shift());

const a = ((A * C) / 2).toFixed(3);
const b = (3.14159 * Math.pow(C, 2)).toFixed(3);
const c = (((A + B) * C) / 2).toFixed(3);
const d = (Math.pow(B, 2)).toFixed(3);
const e = (A * B).toFixed(3);

console.log(`TRIANGULO: ${a}\nCIRCULO: ${b}\nTRAPEZIO: ${c}\nQUADRADO: ${d}\nRETANGULO: ${e}`);
