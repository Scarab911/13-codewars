/*
Gaunamas savaites krituliu kiekis milimetrais.
Jei visa savaite visiskai nelyjo, graziname: "Sausra";
Jei krituliu ne daugiau nei 50mm, tai: "Ganetinai sausa savaite";
Jei krituliu kiekis ne daugiau 200mm, tai: "Lietinga savaite"
Jei krituliu virs 1000mm, tai: "Barsukas turetu sedeti namie"
Visais kitais atvejais: "Labai daug lietaus"
*/

function krituliai(savaite) {
    
    let suma = 0;

    for (let i = 0; i < savaite.length; i++) {

        suma += savaite[i];
        
    }
    if (suma === 0){
        return suma, 'sausra';
    }
    if (suma > 0 &&  suma <= 50){
        return suma, 'Ganetinai sausa savaite';
    }
    if (suma > 50 && suma <= 200){
        return suma, 'Lietinga savaite';
    }
    if (suma > 1000){
        return suma, 'Barsukas turetu sedeti namie';
    }
return 'Labai daug lietaus';
     
}

const a = [0, 0, 0, 0, 0, 0, 0];
const b = [0, 0, 10, 5, 7, 0, 0];
const c = [50, 0, 10, 5, 7, 40, 15];
const d = [100, 200, 300, 400, 500, 600, 700];
const e = [100, 100, 100, 100, 100, 100, 100];


console.log(krituliai(a), '->', 'Sausra')
console.log(krituliai(b), '->', 'Ganetinai sausa savaite')
console.log(krituliai(c), '->', 'Lietinga savaite')
console.log(krituliai(d), '->', 'Barsukas turetu sedeti namie')
console.log(krituliai(e), '->', 'Labai daug lietaus')



   //     switch(suma) {
    //         case 1: suma === 0;
    //             console.log('Sausra');
    //             break;
    //         case 2: suma > 0 &&  suma <= 50;
    //             console.log('Ganetinai sausa savaite');
    //             break;
    //         case 3: suma > 50 && suma <= 200;
    //             console.log('Lietinga savaite');
    //             break;
    //         case 3: suma > 1000;
    //             console.log('Barsukas turetu sedeti namie');
    //             break;
    //         default : 
    //             console.log('Labai daug lietaus');
    // }

    // const xa = 0;
// const xb = 0;
// const xc = 0;
// const xd = 0;
// const xe = 0;

// if (suma === 0){
//     console.log('Sausra');

//     } else if (suma > 0 &&  suma <= 50) {
//         console.log(suma, 'Ganetinai sausa savaite');

//     } else if(suma > 50 && suma <= 200){
//         console.log(suma, 'Lietinga savaite');

//     } else if (suma > 1000){
//         console.log(suma,'Barsukas turetu sedeti namie');

//     } else {
//         console.log(suma, 'Labai daug lietaus');
//     }