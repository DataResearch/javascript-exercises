const fibonacci = function(number) {
    number = Number(number);
    if (number <= 0) {
        return "OOPS";
    }

    if (number === 1 || number === 2) {
        return 1;
    }

    return fibonacci(number - 2) + fibonacci(number - 1);
};

// Do not edit below this line
module.exports = fibonacci;
