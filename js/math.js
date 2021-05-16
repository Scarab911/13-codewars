/*
Reikia apskaiciuoti kam lygu duoto skaiciau 
penkis kartus didesne reiksme, 
kuri pries tai buvo sumazinta 7 vienetais.
*/


const rezultatas = skaicius => (skaicius - 7)*5;

const a = 9;
const b = 19;
const c = -5;
const d = -3.5;
const e = 4;
const f = 2000;

// const xa = (a - 7)* 5;
// const xb = 0;
// const xc = 0;
// const xd = 0;
// const xe = 0;
// const xf = 0;

console.log(rezultatas(a), `->`, '10');
console.log(rezultatas(b), `->`, '60');
console.log(rezultatas(c), `->`, '-60');
console.log(rezultatas(d), `->`, '-52.5');
console.log(rezultatas(e), `->`, '-15');
console.log(rezultatas(f), `->`, '9965');
