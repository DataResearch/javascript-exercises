const repeatString = function(string, count) {
    if (typeof(count) != "number" || count < 0) {
        return "ERROR";
    }
    let buffer = "";
    for (i = 0; i < count; ++i) {
        buffer += string;
    }
    return buffer;
};

// Do not edit below this line
module.exports = repeatString;
