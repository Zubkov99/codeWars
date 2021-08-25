// TASK
// There is an array with some numbers. 
// All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.




//   MY BEST SOLUTION
function findUniq(arr) {
    arr.sort((a,b) => a-b);

    if(arr[0] == arr[1]) {
        return arr.pop()
    } else return arr[0]

  }

  console.log(findUniq([100,100,100,150]));
  



//MY FIRST STUPID SOLUTION
// function findUniq(arr) {
//     let result = arr.find(function(item, index, array) {
//         if(index == 0) {
//             if(item != array[index + 1] && item != array[index + 2]) {
//                 return item
//             }
//         }
//         if(index > 0 && index < array.length) {
//             if(item != array[index + 1] && item != array[index - 1] ) {
//                 return item
//             }
//         }
//         if(index == array.length) {
//             if (item != array[index - 1] && item != array[index - 2] ) {
//                 return item
//             }
//         }
//       });
//       if(result === undefined) {
//           return 0
//       } else {
//         return result
//       } 
// }

