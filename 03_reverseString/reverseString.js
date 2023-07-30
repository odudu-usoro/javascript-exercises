const reverseString = function(string) {
    let newString = "";

    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

reverseString("Odudu");

// Do not edit below this line
module.exports = reverseString;
