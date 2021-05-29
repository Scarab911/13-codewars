function tripleTrouble(one, two, three){
    let text = '';

    for (let i = 0; i < one.length; i++) {
        
     text += one[i]+two[i]+three[i];  

    } 
    return text;
} 


console.log(tripleTrouble("this","test","lock"), "ttlheoiscstk");
console.log(tripleTrouble("aa","bb","cc"), "abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"), "Batman");
console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");