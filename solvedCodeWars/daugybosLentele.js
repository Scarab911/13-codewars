function multiTable(number) {
    let arr = [];

    for (let i = 1; i <= 9; i++) {

        arr += `${i} * ${number} = ${i * number}\n`;

    }
    return arr += `10 * ${number} = ${10 * number}`;
}

console.log(multiTable(5));
console.log(multiTable(1));