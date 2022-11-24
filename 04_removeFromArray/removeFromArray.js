const removeFromArray = function(array, ...valuesToRemove) {
    let container = array;
    for (let i = 0; i < valuesToRemove.length; ++i) {
        container = container.filter(function(value, _no, _no2) { return value !== valuesToRemove[i];});
    }
    return container;
};

// Do not edit below this line
module.exports = removeFromArray;
