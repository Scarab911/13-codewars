Array.prototype.filter = function (func) {
    const didesniUz = [];
    for (const item of this) {
        if (func(item)) {
            didesniUz.push(item);
        }
    }
    return didesniUz;
}



// function filter(list) {
//     const didesniUz = [];
//     for (const item of list) {
//         if (item > 3) {
//             didesniUz.push(item);
//         }
//     }
//     return didesniUz;
// }


// console.log(filter([1, 2, 3, 4, 5, 6, 7]), '->', [4])
// console.log(filter([1, 2]), '->', [])
console.log([1, 2, 3, 4].filter((num) => { return num > 3 }), [4]);