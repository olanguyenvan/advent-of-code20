var fs = require("fs");
const path = require("path");

import { findNumberNotBeingSum } from "./preamble-sum";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    try {
        const numbers = contents.split("\n").map(Number);

        solvePart1(numbers);
    } catch (e) {
        console.log(e);
    }
}

function solvePart1(numbers) {
    const preambleLength = 25;
    const numberNotBeingASum = findNumberNotBeingSum(numbers, preambleLength);

    console.log(
        `Answer to part 1 is: First number that does not have the defined property is ${numberNotBeingASum}.\n`
    );
}
