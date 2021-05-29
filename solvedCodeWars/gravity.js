const flip=(d, a)=>{
    
    let temp = 0

    for (let i = 0; i < a.length; i++) {
        

        for (let j = i+1; j < a.length; j++) {
            
            if(d === 'L' && a[i] < a[j]){
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            } else if (d === 'R' && a[i] > a[j]) {
               temp = a[j];
               a[j] = a[i];
               a[i] = temp; 
            }
    
        
        }
    }
    return a;
}


/* Simple ternary sort function
const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);
*/
console.log(flip('R', [3, 2, 1, 2]), '->', [1, 2, 2, 3]);

console.log(flip('L', [1, 4, 5, 3, 5]),'->', [5, 5, 4, 3, 1]);
console.log(flip('L', [1, 4, 5, 3, 8 ,2, 20, 50, 36]),'->', [50, 36, 20, 8, 5, 4, 3, 2, 1]);