const sumAll = function(min, maxinc) {
    if (typeof(min) != 'number' || typeof(maxinc) != 'number' || min < 0 || maxinc < 0) {
        return 'ERROR';
    }
    if (min > maxinc) {
        let store = min;
        min = maxinc;
        maxinc = store;
    }
    let accum = 0;
    for (let i = min; i < maxinc+1; ++i) {
        accum += i;
    }
    return accum;
};

// Do not edit below this line
module.exports = sumAll;
