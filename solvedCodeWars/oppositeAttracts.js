function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true;
    } else if (flower1 % 2 !== 0 && flower2 % 2 === 0){
        return true;
    }
    
    return false;
  }

/* Shorter version

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

si versija tiesiog palygina liekanas
*/


console.log(lovefunc(1,4), true)
console.log(lovefunc(2,2), false)
console.log(lovefunc(0,1), true)
console.log(lovefunc(0,0), false)