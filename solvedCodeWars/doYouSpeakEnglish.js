function spEng(sentence){

const myStr = sentence.toLowerCase();

return myStr.includes("english");   

}

console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);