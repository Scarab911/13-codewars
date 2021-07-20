function add(a, b) {
    let sum = '';
    let x = 0;

    if (a.length > b.length) {
        b = '0'.repeat(a.length - b.length) + b;
    }
    if (a.length < b.length) {
        a = '0'.repeat(b.length - a.length) + a;
    }
    a = '0' + a;
    b = '0' + b;

    for (let i = a.length - 1; i >= 0; i--) {
        const nA = +a[i];
        const nB = +b[i];
        if (nA + nB + x > 9) {
            sum = nA + nB + x - 10 + sum;
            x = 1;
        } else {
            sum = nA + nB + x + sum;
            x = 0;
        }
    }
    if (sum[0] === '0') {
        sum = sum.slice(1);
    }
    return sum
}

// console.log(add("1", "1"), '->', "2");
// console.log(add("123", "456"), '->', "579");
// console.log(add("888", "222"), '->', "1110");
// console.log(add("1372", "69"), '->', "1441");
// console.log(add("12", "456"), '->', "468");
// console.log(add("101", "100"), '->', "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")