//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = "13 2 15.30\n161 4 5.20";

const [line1, line2] = input.split('\n');

const a1 = line1.split(" ");
const a2 = line2.split(" ");
    
const cod1 = parseInt(a1.shift());
const cod2 = parseInt(a2.shift());

const unit1 = parseFloat(a1.shift());
const unit2 = parseFloat(a2.shift());

const value1 = parseFloat(a1.shift()).toFixed(2);
const value2 = parseFloat(a2.shift()).toFixed(2);

const total = ((unit1 * value1) + (unit2 * value2)).toFixed(2);

console.log("VALOR A PAGAR: R$ " + total);