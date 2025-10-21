const sumAll = function(a, b) {
    if (Math.floor(a) !== a || Math.floor(b) !== b) {
        return 'ERROR';
    } else if (a < 0 || b < 0) {
        return 'ERROR';
    }

    let solution = 0;

    if (a < b) {
        for (let i = a; i <= b; i++) {
            solution += i;
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            solution += i;
        }
    }
    
    return solution;
};

// Do not edit below this line
module.exports = sumAll;
