function countSheeps(arrayOfSheep) {
    
    let numberOfSheep = 0;

    for (let i = 0; i < arrayOfSheep.length; i++) {

        if (arrayOfSheep[i] === true){
            numberOfSheep += arrayOfSheep[i];
        }
        
    } return numberOfSheep

  }

var array1 = [true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true ];

var array2 = [true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true , null, undefined, true];

var array3 = [null,  null,  null,  false,
    null,  null,  null,  null ,
    null,  false, null,  false,
    null,  false, false, null ,
    null,  null,  null,  null ,
    false, false, null,  null ];
    
console.log(countSheeps(array1), "There are 17 sheeps in total");
console.log(countSheeps(array2), "There are 18 sheeps in total");
console.log(countSheeps(array3), "There are 0 sheeps in total");