var moveZeros = function (arr) {
    let y = arr.filter(item => item !== 0);
    let x = arr.filter(item => item === 0);

    console.log(y);
    console.log(x);
    let z = y.concat(x);
    return z;
}





console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), '->', ([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]), '->', [false, 1, 1, 2, 1, 3, "a", 0, 0]);