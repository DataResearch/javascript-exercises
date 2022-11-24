const leapYears = function(year) {
    let divisible4 = year % 4 === 0;
    let divisible100 = year % 100 === 0;
    let divisible400 = year % 400 === 0;

    return divisible4 && !divisible100 || divisible100 && divisible400;
};

// Do not edit below this line
module.exports = leapYears;
