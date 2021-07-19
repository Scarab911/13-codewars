function colorOf(r, g, b) {
    let colorInHex = '#';
    const zero = '0';

    const a = r < 16 ? zero + r.toString(16) : r.toString(16);
    const d = g < 16 ? zero + g.toString(16) : g.toString(16);
    const c = b < 16 ? zero + b.toString(16) : b.toString(16);
    colorInHex += a + d + c;

    return colorInHex;
}

console.log(colorOf(255, 0, 0), '->', "#ff0000");
console.log(colorOf(0, 111, 0), '->', "#006f00");
console.log(colorOf(1, 2, 3), '->', "#010203");
console.log(colorOf(15, 15, 15), '->', "#0F0F0F");
console.log(colorOf(16, 16, 16), '->', "#101010");