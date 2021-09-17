// Basically: you need to write the reverse 
// function without using array methods.
// Cata Name: 'I need more speed!'



function reverse(arr) {
    let length = arr.length - 1;
    let left = 0;
    let right = length;

    for (right = length; left < right; left++, right--){
        let temporary = arr[left];
        arr[left] = arr[right]
        arr[right] = temporary;
    }
    return arr
}
reverse([1,2,3,4,5,6]);

