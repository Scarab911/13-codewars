function differenceInAges(ages){

        let youngest = Infinity;
        let oldest = 0;

        for (let i = 0; i < ages.length; i++) {
            if( ages[i] < youngest){
                youngest = ages[i];
            }
            if (ages[i] > oldest){
                oldest = ages[i];
            }     
        } 
        return [youngest, oldest, oldest-youngest];
    } 
    
    console.log(differenceInAges([82, 15, 6, 38, 35]), `->`, [6, 82, 76]);
    console.log(differenceInAges([57, 99, 14, 32]), `->`, [14, 99, 85]);