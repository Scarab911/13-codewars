function solution(str){
const d = [...str]
const jras = d.reverse().join('');
      
 return jras
}

console.log(solution('world'), '->', 'dlrow');
console.log(solution('hello'), '->','olleh');
console.log(solution(''), '->','');
console.log(solution('h'), '->','h');

// VARIANTAS SU CIKLU KAIP PAIMTI IS STRINGO GALO:

// function solution(s){
//     var o = '';
//     for (var i = s.length - 1; i >= 0; i--)
//       o += s[i];
//     return o;
//   }