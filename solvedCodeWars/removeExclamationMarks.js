function removeExclamationMarks(s) {

    let naujas = '';
    for (let i = 0; i < s.length; i++) {

        if (s[i] !== '!') {         //jei indexas yra ne ! tada ta index priklijuojam prie naujo
            naujas += s[i];             // taip praskinamas nereikalingas simbolis
        }
    }
    return naujas;
}

/* trumpas su SPLIT ir JOIN

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

*/

console.log(removeExclamationMarks("Hel!lo! Wo!rld!"), '->', "Hello World");