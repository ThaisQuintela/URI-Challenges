//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = "4\ncompete online design event rating\n  u    r i  o    n l  i    n  e   \n \nround  elimination during  onsite  contest";

const lines = input.split('\n');
const N = parseInt(lines.shift());

let x = [];
for (i=0; i<N; i++) {
  const reduzir = lines[i].replace(/ +/g, " ");
  const array = reduzir.split(' ');

  const semEspaco = array.filter(item => item !== "");

  let response = '';
  semEspaco.forEach(item => {
    response += item[0];
  })

  console.log(response);
}
