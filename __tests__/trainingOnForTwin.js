function iceBrickVolume(radius, bottleLength, rimLength) {
    const brickHeight = bottleLength - rimLength;
    const brickVolume = brickHeight * radius * 2;
    return brickVolume
}

console.log(iceBrickVolume(1, 10, 2), '->', 16);
console.log(iceBrickVolume(5, 30, 7), '->', 1150);


