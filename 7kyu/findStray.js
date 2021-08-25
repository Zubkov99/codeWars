function stray(numbers) {

    let min = Math.min.apply(null, numbers),
        max = Math.max.apply(null, numbers);
        counter = 0;

      for(let i = 0; i < numbers.length; i++) {
          if(numbers[i] == max) {
            counter++;
          }
      }

      if(counter == 1) {
          return max
      } else {
          return min
      }

    }


    let num = [10,10,2,10,10];

    stray(num)


// You are given an odd-length array of integers, 
// in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, 
// and returns that single different number.

// The input array will always be valid! (odd-length >= 3)