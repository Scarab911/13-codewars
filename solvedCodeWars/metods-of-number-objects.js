function howManySmaller(arr, n) {
    let count = 0;
    const fixedArray = [];
    const parsedArray = []
    for (const number of arr) {
        fixedArray.push(number.toFixed(2));
    }
    for (const number of fixedArray) {
        parsedArray.push(parseFloat(number))

    }
    for (const number of parsedArray) {

        if (number < n) {
            count++
        }
    }
    return count
}
console.log(howManySmaller([1.234, 1.235, 1.228], 1.24), '->', 2);
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), '->', 1);
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), '->', 2);