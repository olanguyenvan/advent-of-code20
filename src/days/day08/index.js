var fs = require("fs");
const path = require("path");

import {
    getValueBeforeSecondLoop,
    getValueAfterTermination,
    parseInput,
} from "./code";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, inputContents) {
    solvePart1(inputContents);
    solvePart2(inputContents);
}

function solvePart1(inputContents) {
    const instructions = parseInput(inputContents);
    const [value] = getValueBeforeSecondLoop(instructions);

    console.log(
        `Answer to part 1 is: The value in the accumulator before second loop is ${value}.\n`
    );
}

function solvePart2(inputContents) {
    const instructions = parseInput(inputContents);
    const value = getValueAfterTermination(instructions);

    console.log(
        `Answer to part 2 is: The value of the accumulator after the program terminates is ${value}.\n`
    );
}
