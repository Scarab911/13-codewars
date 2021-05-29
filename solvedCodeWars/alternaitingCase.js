String.prototype.toAlternatingCase = function () {
  let gavau =''+ this;
    let pakeistas = '';
    for (let i = 0; i < gavau.length; i++) {
        if (gavau[i] === gavau[i].toUpperCase() && gavau[i] !== ' ') {
            pakeistas += gavau[i].toLowerCase();
            // console.log(pakeistas);
            
        } else
        if (gavau[i] === gavau[i].toLowerCase()) {
            pakeistas += gavau[i].toUpperCase();
            // console.log(pakeistas);
        }
        // if (typeof  gavau[i] === 'number') {
        //   pakeistas = gavau[i];
        //   console.log(pakeistas);
        // }
        
    } return pakeistas
  }

/* Panaudojant MAP metoda priskirti funckija arejui ir su 'join' su junkti

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

*/


test('Teisingai', () => {
    expect("HELLO WORLD".toAlternatingCase()).toBe("hello world");
    expect("hello world".toAlternatingCase()).toBe("HELLO WORLD");
    expect("hello WORLD".toAlternatingCase()).toBe("HELLO world");
    expect("HeLLo WoRLD".toAlternatingCase()).toBe("hEllO wOrld");
    expect("12345".toAlternatingCase()).toBe("12345");
    expect("1a2b3c4d5e".toAlternatingCase()).toBe("1A2B3C4D5E");
    expect("String.prototype.toAlternatingCase".toAlternatingCase()).toBe("sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    expect("Hello World".toAlternatingCase().toAlternatingCase()).toBe("Hello World");
})