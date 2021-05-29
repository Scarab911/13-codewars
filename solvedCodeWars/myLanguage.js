



function myLanguages(results) {
    const lang = {}
    for (let key in results) {
        lang[results[key]] = key;

    }
    const newKeys = Object.keys(lang);
    const keysAsNumbers = newKeys.map(x => +x) //keiciam string i number
    const sortedKeys = keysAsNumbers.sort((a, b) => b - a);
    let newArry = [];
    for (let x of sortedKeys) {
        if (x >= 60) {
            newArry.push(lang[x])
        }
    }
    return newArry;
}

console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }), '->', ["Ruby", "Python"])
console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }), '->', ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }), '->', [])
console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65, 'F#': 100 }), '->', ['F#', "Ruby", "Python"])

/*
SHORTEST

function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}
*/

/*
function myLanguages(results) {
    const rezultatai = results;
    let newArr = [];

    for (const kalba in rezultatai) {
        if (rezultatai[kalba] >= 60) {
            newArr.push(`${kalba}`)
        }
    }
    return newArr;
}
*/