var summation = function (num) {
    
    // const x = Array.from({length: num}, (_, i) => i + 1);

    // let sum = 0;

    // for (let i = 0; i < x.length; i++) {
        
    //     sum += x[i];
        
    // } return sum

    /* 2nd method */

        // let result = 0;
        // for (var i = 1; i <= num; i++) {
        //   result += i;
        // }
        
        // return result;

      /* 3rd method*/
        return num * (num + 1) / 2
    
}

console.log(summation(2), 3)
console.log(summation(8), 36)