function solution(str, ending) {
    const ilgiuSkirtumas = str.length - ending.length;
    for (let i = ending.length - 1; i >= 0; i--) {
        let a = ending[i];
        let b = str[i + ilgiuSkirtumas];
        if (a !== b) {
            return false;
        }
    }
    return true;
}
console.log(solution('abcde', 'cde'), '->', true)
console.log(solution('abcde', 'abc'), '->', false)
console.log(solution('abcde', 'c'), '->', false)
console.log(solution('sumo', 'omo'), '->', false)
console.log(solution('labas', 'labas'), '->', true)
console.log(solution('abcde', 'de'), '->', true)
console.log(solution('abcde', 'e'), '->', true)


/*
abcde
01234

  cde
  012

*/