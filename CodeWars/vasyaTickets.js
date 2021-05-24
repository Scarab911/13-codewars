function tickets(peopleInLine){
    
    const x = [...peopleInLine];

    console.log(x);

    let kasa = 0;
    
    for (let i = 0; i < x.length; i++) {
        
        if (x[0] !== 25) {
            return 'NO';
        }  
        kasa = x[0];
        
        if (x[1] > 50) {
            return 'NO';
        }
        kasa = x[1]
        
    } return kasa;

   

}

// console.log(tickets([30, 25, 50, 50]),'->', "NO");
console.log(tickets([25, 25, 50, 50]), '->',"YES");
console.log(tickets([25, 100]), '->',"NO");
console.log(tickets([25, 50]), '->',"YES");
// console.log(tickets([25, 50, 75]), '->',"YES");
// console.log(tickets([25, 50, 75, 100]), '->',"YES");
// console.log(tickets([25, 50, 100]), '->',"NO");