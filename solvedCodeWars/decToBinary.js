function toBinary(x) {
    let bin = '';
    bin = x.toString(2);
    return parseInt(bin)
}


console.log(toBinary(1), '->', 1);
console.log(toBinary(2), '->', 10);
console.log(toBinary(3), '->', 11);
console.log(toBinary(5), '->', 101);
console.log(toBinary(8), '->', 1000);