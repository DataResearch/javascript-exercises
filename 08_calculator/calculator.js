const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let accum = 0;
    for (let i = 0; i < arr.length; ++i) {
      accum += arr[i];
    }
    return accum;
};

const multiply = function(arr) {
  let accum = 1;
  for (let i = 0; i < arr.length; ++i) {
    accum *= arr[i];
  }
  return accum;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(n) {
	if (n < 1) return 1;
    else return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
