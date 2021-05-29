function enough(cap, on, wait) {
    const totalPeople = on + wait;
    if (cap >= totalPeople) {
        return 0;
    } else {
        return (cap - totalPeople)* -1;
    }
  }

console.log(enough(10, 5, 5),'->', 0);
console.log(enough(100, 60, 50),'->', 10);
console.log(enough(20, 5, 5),'->', 0);