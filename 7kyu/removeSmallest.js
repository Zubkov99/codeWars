function removeSmallest(numbers) {
    if(!numbers) return [];
    let min = Math.min.apply(null, numbers);
    let result = numbers.concat();
    result.splice(numbers.indexOf(min),1);
    
    return result


  }


  let arr = [5,3,2,1,1,4]

  console.log(removeSmallest(arr));


// Task
// Given an array of integers, remove the smallest value. 
// Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with a lower index. 
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

