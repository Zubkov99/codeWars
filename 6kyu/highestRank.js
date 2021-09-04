function highestRank(arr) {
    let obj = {}

    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]) {
            obj[arr[i]] ++;
        } else obj[arr[i]] = 1;
    }


let arrNumber = Object.entries(obj);


arrNumber.sort(function(a,b){ 
    return a[1] - b[1];
  })

return Number(arrNumber[arrNumber.length - 1][0])


}

console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10, 10] ));
