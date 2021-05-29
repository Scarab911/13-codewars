function bmi(weight, height) {
    const a = (weight / Math.pow(height, 2));
    if (a <= 18.5) {
        return 'Underweight';
    }
    if (a <= 25.0) {
        return 'Normal';
    }
    if (a <= 30.0) {
        return 'Overweight';
    }
    return 'Obese';
}

console.log(bmi(80, 1.80), '->', "Normal");


