const a = () => 1 ? true : false;


console.log(a == false, true, '->', `a != false`);
console.log(!a == false, true, '->', `!a != false`);
console.log(a == !a, true, '->', `a != !a`);