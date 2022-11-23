const removeFromArray = function(array, ...valuesToRemove) {
    for (let i = 0; i < valuesToRemove.length; ++i) {
        array = array.filter(function(value, i, arr) { return value !== valuesToRemove[i];});
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
