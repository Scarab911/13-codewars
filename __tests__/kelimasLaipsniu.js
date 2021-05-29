function Laipsniu(number, power) {
    let x = 1;
    if (power === 0) {
        return 1;
    }
    for (let i = 1; i <= power; i++) {
        x *= number;
    }
    return x;
}



console.log(Laipsniu(4, 2), 16);
console.log(Laipsniu(10, 4), 10000);
console.log(Laipsniu(10, 0), 1);
