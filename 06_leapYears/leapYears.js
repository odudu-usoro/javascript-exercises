const leapYears = function(year) {
    year.prompt() = "Input any given year";
    if (year % 4 == 0 && year % 400 == 0 || year % 100 == 0){
        console.log("This is a leap year");
    } else {
        console.log("This is not a leap year, Input another year")
    }
};

// Do not edit below this line
module.exports = leapYears;
 