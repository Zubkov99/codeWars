

function countSheeps(arrayOfSheep) {
    let numberOfShips = 0;
    arrayOfSheep.forEach(element => {
        if(element == true) {
            numberOfShips++;
        }
    });

    return numberOfShips
}

// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

let arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];


    console.log(countSheeps(arr));