//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = "10\n10 10 10 10 15 18 20 15 11 10\n10\n1 5 2 9 5 5 8 4 4 3\n10\n19 9 1 4 5 8 6 11 9 7";

const lines = input.split('\n');
const corridas = lines.filter((value, index) => index%2 != 0);

for (i = 0; i < corridas.length; i++) {
  let maisRapido = 0;
  const arr = corridas[i].split(' ');
  const velocidades = arr.map(Number);

  velocidades.forEach(lesma => {
    if (lesma > maisRapido) {
      maisRapido = lesma;
    }
  })

  if (maisRapido < 10) {
    console.log(1);
  } else if (maisRapido >= 10 && maisRapido < 20) {
    console.log(2);
  } else {
    console.log(3);
  }
}
