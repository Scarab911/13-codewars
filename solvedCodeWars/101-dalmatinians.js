function howManyDalmatians(number) {

    let dogs = ['Hardly any', 'More than a handful!', "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    let respond = '';
    if (number === 101) {
        respond = dogs[3];

    } else if (number <= 10) {
        respond = dogs[0];
    } else if (number < 50) {
        respond = dogs[1];
    } else if (number >= 50) {
        respond = dogs[2];
    }

    return respond
}

console.log(howManyDalmatians(26), "More than a handful!");
console.log(howManyDalmatians(8), "Hardly any");
console.log(howManyDalmatians(14), "More than a handful!");
console.log(howManyDalmatians(80), "Woah that's a lot of dogs!");
console.log(howManyDalmatians(100), "Woah that's a lot of dogs!");
console.log(howManyDalmatians(101), "101 DALMATIANS!!!");