const getTheTitles = function(lists) {
    let titlesArray = [];
    for (let i = 0; i < lists.length; ++i) {
        titlesArray.push(lists[i].title);
    }
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
