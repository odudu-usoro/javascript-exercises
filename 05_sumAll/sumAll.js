// const sumAll = function addNumbers(nums) {
//     const numArray = [1, 2, 3, 4, 5];
//     const result = addNumbers(numArray);
//     let finalSum = 0;

//     for (i = 0; i < nums.length; i++) {
//         finalSum += nums[i];
//     }

//     return finalSum;
// };

// return result;


function addNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  
  const numbersArray = [1, 2, 3, 4, 5];
  const result = addNumbers(numbersArray);
  console.log(result); // Output: 15
  
// Do not edit below this line
module.exports = sumAll;
