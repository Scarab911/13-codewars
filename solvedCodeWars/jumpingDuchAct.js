function sc(floor) {
    let scream = '';
    for (let i = floor; i >= 0; i--) {

        if (floor === 1 || floor < 0) {
            return scream;
        }

        if (floor <= 0) {
            return scream;
        }

        if (i > 1) {
            scream += 'Aa~ ';
        }

        if (i === 1 && floor > 6) {
            scream += 'Pa!'
        } else if (i === 1) {
            scream += 'Pa! ';
        }

        if (i === 1 && floor <= 6) {
            scream += 'Aa!';
        }
    }
    return scream
}
console.log(sc(2), '->>', "Aa~ Pa! Aa!");
console.log(sc(6), '->>', "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!");
console.log(sc(7), '->>', "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!");
console.log(sc(10), '->>', "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!");
console.log(sc(1), '->>', "");
console.log(sc(-1), '->>', "");