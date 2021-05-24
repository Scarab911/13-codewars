function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const blueLeft = blueStart - bluePulled;
  
    const redLeft = redStart - redPulled;
   
    const blueProbability = blueLeft/(blueLeft+redLeft);
    // const redProbability = redLeft/(blueLeft+redLeft);
    return blueProbability;
    // return redProbability;
  }

console.log(guessBlue(5, 5, 2, 3), '->', 0.6);
console.log(guessBlue(5, 7, 4, 3), '->', 0.2);
console.log(guessBlue(12, 18, 4, 6), '->', 0.4);
console.log(guessBlue(9, 5, 2, 3), '->', 0.4);