function nbDig(n, d) {
    let array = [];
    for (let i = 0; i <= n; i++) {
        array.push(i);
    }
    const newArray = array.map(item => (item = (item * item)).toString());
    let filteredD = newArray.filter(item => item.includes(d));

    filteredD = filteredD.join('');

    let count = 0;

    for (const digit of filteredD) {
        if (digit == d) {
            count++
        }
    }
    return count;
}

console.log(nbDig(10, 1), '->', 4)
console.log(nbDig(25, 1), '->', 11)
console.log(nbDig(5750, 0), '->', 4700)
console.log(nbDig(11011, 2), '->', 9481)
console.log(nbDig(12224, 8), '->', 7733)
console.log(nbDig(11549, 1), '->', 11905)