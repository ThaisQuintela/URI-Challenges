//const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = '5\nABCD\nAB\nC\nABEDCS\n\n\nEDSMB\nMSD\nA\n\n\n\nIWANTSODER\nSOW\nRAT';

const lines = input.split('\n');
const N = lines.shift();

const tests = []; 
for (i=0; i<N; i++) {
  tests[i] = lines.splice(0,3);
}

tests.forEach(test => {
  const x = test[0].split('').sort();
  const y = test[1].split('').sort();
  const z = test[2].split('').sort();

  // https://stackoverflow.com/questions/53606337/check-if-array-contains-all-elements-of-another-array
  const checker = (arr, target) => target.every(v => arr.includes(v));
  let result = "";
  if (!checker(x, y) || !checker(x, z)) {
    console.log("CHEATER");
  } else {
    x.forEach(item => {
      if (!y.includes(item) && !z.includes(item)) {
        result += item;
      }
    })
    console.log(result);
  }
})
