
function array(arr) {
    let splitted = arr.split(',');
    if (splitted.length < 2 ||
        splitted.length === 0) {
        return null;
    }
    splitted.pop();
    splitted.shift();
    if (splitted.length === 0) {
        return null;
    }
    return splitted.join(' ')
}



console.log(array(''), '->', null);
console.log(array('1'), '->', null);
console.log(array('1, 3'), '->', null);
console.log(array('1,2,3'), '->', '2');