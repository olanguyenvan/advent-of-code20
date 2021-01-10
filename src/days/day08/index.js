var fs = require("fs");
const path = require("path");

import { getValueBeforeSecondLoop, parseInstruction } from "./code";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    const instructions = contents.split("\n");

    solvePart1(instructions);
}

function solvePart1(instructions) {
    const parsedInstructions = instructions.map(parseInstruction);
    const value = getValueBeforeSecondLoop(parsedInstructions);

    console.log(
        `Answer to part 1 is: The value in the accumulator before second loop is ${value}.\n`
    );
}
