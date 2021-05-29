//V1

// function removeChar(string) {
//     const text = [...string];
//     const firstChar = string[0];
//     const lastChar = string[string.length - 1];

    




//     return `${firstChar}, ${lastChar}`
// }


// ---------------V2-----------------

function removeChar(string) {
    let text = '';
     for (let i = 1; i < string.length -1; i++) {   
         text += string[i];    
     }
    return text
}

//Super trumpas string apipjaustymas:

// function removeChar(str) {
//     return str.slice(1, -1);
//   }

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');

