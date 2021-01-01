var fs = require('fs');
const path = require("path");

fs.readFile(path.resolve(__dirname, 'input'), 'utf8', main)

// ========================
function main(err, contents) {
    const entries = contents.split('\n');
    const entriesAsNumbers = entries.map((e => parseInt(e)))

    solvePart1(entriesAsNumbers);
    solvePart2(entriesAsNumbers);
}


// ==============

function solvePart1(entries) {
    entries.sort();
    const [factor1, factor2] = find2FactorsMakingUpSum(entries, 2020);

    console.log(`Answer to part 1 is: ${factor1} * ${factor2} = ${factor1 * factor2 }\n`)
}

// entries - Array of sorted numbers
function find2FactorsMakingUpSum(entries, searchValue) {
    var left = 0;
    var right = entries.length - 1;

    var leftValue, rightValue, nextLeftValue;    

    while(left <= right) {
        leftValue = entries[left];
        rightValue = entries[right];
        
        nextLeftValue = entries[left + 1];


        if (leftValue + rightValue === searchValue) {
            return [leftValue, rightValue]
        }

        if (nextLeftValue + rightValue <= searchValue) {
            left = left + 1;
        }
        else {
            right = right - 1;
        }
    }

    return;
}


// ==============

function solvePart2(entries) {
    entries.sort();
    const [factor1, factor2, factor3] = find3FactorsMakingUp2020(entries);

    console.log(`Answer to part 1 is: ${factor1} * ${factor2} * ${factor3} = ${factor1 * factor2 * factor3}\n`)
}

// entries - Array of sorted numbers
function find3FactorsMakingUp2020(entries) {
    const searchValue = 2020;

    for(var i = 0; i  < entries.length; i++) {
        const tmpFirstFactor = entries[i];
        const tmpSearchValue = searchValue - tmpFirstFactor;    
        const result = find2FactorsMakingUpSum(entries, tmpSearchValue);

        if (result) {
            return [tmpFirstFactor, ...result]
        }
    }
}