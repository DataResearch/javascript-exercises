const palindromes = function (str) {
    let processedString =
        str.split(" ").join("").split(".").join("").split("!").join("").split(",").join("").trim().toLowerCase();
    let mirrored = processedString.split("").reverse().join("");

    return processedString === mirrored;
};

// Do not edit below this line
module.exports = palindromes;
