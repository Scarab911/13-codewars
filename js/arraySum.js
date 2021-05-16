

const arraySum = (array) => array[0] + array[array.length - 1];


/*
Is duoto array reikia apskaiciuoti suma, kuri yra sudaryta is pirmo ir paskutinio to array nariu.
*/

const a = [4, 5];
const b = [1, 2, 3, 4];
const c = [99, 77, 55, 33, 22, 11, -11, -22, -33];
const d = [-17, 55, 4, 5];
const e = [-17, 55, 1, 2, 3, 4];
const f = [-17, 55, 99, 77, 55, 33, 22, 11, -11, -22, -33];

const xa = 0;
const xb = 0;
const xc = 0;
const xd = 0;
const xe = 0;
const xf = 0;


console.log(arraySum(a), `->`, '9');
console.log(arraySum(b), `->`, '5');
console.log(arraySum(c), `->`, '66');
console.log(arraySum(d), `->`, '-12');
console.log(arraySum(e), `->`, '-13');
console.log(arraySum(f), `->`, '-50');