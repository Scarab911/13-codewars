//duota skaiciu iskaidyti i sarasa

function preFizz(n) {

    let arr = [];
    
    for (let i = 1; i <= n; i++) {
        
        arr.push(i);
    }
    return arr
}


console.log(preFizz(1), '->', [1], `Array should be from 1 to 1`);
console.log(preFizz(2), '->', [1,2], `Array should be from 1 to 2`);
console.log(preFizz(3), '->', [1,2,3], `Array should be from 1 to 3`);
console.log(preFizz(4), '->', [1,2,3,4], `Array should be from 1 to 4`);
console.log(preFizz(5),' ->', [1,2,3,4,5], `Array should be from 1 to 5`);
