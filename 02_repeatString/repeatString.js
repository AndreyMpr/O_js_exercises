const repeatString = function() {
    let string = prompt("What do you want to repeat?");
    let repeater = prompt("How many times?");
    return string * parseInt(repeater);
};

repeatString();

// Do not edit below this line
module.exports = repeatString;
