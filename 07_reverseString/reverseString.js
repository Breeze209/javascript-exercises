const reverseString = function(string) {
    const arr = string.split('');
    string = arr.reverse().join('');
    return string
};

// Do not edit below this line
module.exports = reverseString;
