var fs = require("fs");
const path = require("path");

import {
    findNumberNotBeingSum,
    findContigiousSetSummingUpTo,
} from "./preamble-sum";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    const numbers = contents.split("\n").map(Number);

    const solution1 = solvePart1(numbers);
    solvePart2(numbers, solution1);
}

function solvePart1(numbers) {
    const preambleLength = 5;
    const numberNotBeingASum = findNumberNotBeingSum(numbers, preambleLength);

    console.log(
        `Answer to part 1 is: First number that does not have the defined property is ${numberNotBeingASum}.\n`
    );

    return numberNotBeingASum;
}

function solvePart2(numbers, solution1) {
    const contigiousSet = findContigiousSetSummingUpTo(numbers, solution1);
    const minNumber = Math.min(...contigiousSet);
    const maxNumber = Math.max(...contigiousSet);

    console.log(
        `Answer to part 2 is: The smallest and largest number` +
            ` from contigious set summing up to ${solution1} is ${minNumber} ${maxNumber} (sum is: ${
                minNumber + maxNumber
            }).\n`
    );
}
