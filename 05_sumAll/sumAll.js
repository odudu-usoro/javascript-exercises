const sumAll = function addNumbers(nums) {
    const numArray = [1, 2, 3, 4, 5];
    const result = addNumbers(numArray);
    let finalSum = 0;

    for (i = 0; i < nums.length; i++) {
        finalSum += nums[i];
    }

    return finalSum;
};

return result;

// Do not edit below this line
module.exports = sumAll;
