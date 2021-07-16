
// MAIN function
function rgb(r, g, b) {
    function toHex(param) {
        if (param === 10) {
            return 'A'
        } else if (param === 11) {
            return 'B'
        } else if (param === 12) {
            return 'C'
        } else if (param === 13) {
            return 'D'
        } else if (param === 14) {
            return 'E'
        } else if (param >= 15) {
            return 'F'
        } else {
            return param
        }
    }
    let pirmas = '';
    let antras = '';
    let trecias = '';
    let pirmoLiekana = 0;
    let pirmoSveikasis = 0;
    let antroLiekana = 0;
    let antroSveikasis = 0;
    let trecioLiekana = 0;
    let trecioSveikasis = 0;

    if (r > 255) {
        r = 255;
    }
    if (g > 255) {
        g = 255;
    }
    if (b > 255) {
        b = 255;
    }
    if (r <= 0) {
        pirmas = '00';
    } else {
        pirmoSveikasis = (toHex(Math.floor(r / 16)));
        if (pirmoSveikasis === 0) {
            pirmoSveikasis = '0';
        }
        pirmoLiekana = (toHex(Math.floor(r % 16)));
        pirmas = `${pirmoSveikasis}${pirmoLiekana}`;
    }
    if (g <= 0) {
        antras = '00';
    } else {
        antroSveikasis = (toHex(Math.floor(g / 16)));
        if (antroSveikasis === 0) {
            antroSveikasis = '0';
        }
        antroLiekana = (toHex(Math.floor(g % 16)));
        antras = `${antroSveikasis}${antroLiekana}`;
    }
    if (b <= 0) {
        trecias = '00';
    } else {
        trecioSveikasis = (toHex(Math.floor(b / 16)));
        if (trecioSveikasis === 0) {
            trecioSveikasis = '0';
        }
        trecioLiekana = (toHex(Math.floor(b % 16)));
        trecias = `${trecioSveikasis}${trecioLiekana}`;
    }
    return `${pirmas + antras + trecias}`;
}
console.log(rgb(0, 0, 0), '->', '000000')
console.log(rgb(0, 0, -20), '->', '000000')
console.log(rgb(300, 300, 300), '->', 'FFFFFF')
console.log(rgb(173, 255, 47), '->', 'ADFF2F')
console.log(rgb(9, 9, 9), '->', '090909')
console.log(rgb(269, 161, 60), '->', 'FFA13C')
console.log(rgb(21, 1, 116), '->', '150174')
console.log(rgb(-2, 240, 53), '->', '00F035')


/* Array or Object ?

DDECIMAL : 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
HEX:     : 0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F

Veiksmai:
first number / 16 -> panaudoti math.floor surasti atitikmeni arba jei maziau 10 palikti toki pati,
Remainder * 16 -> panaudoti math.floor surasti atitikmeni arba jei maziau 10 palikti toki pati,
Gautus reultatus suklijuoti i string ir grazinti.
*/