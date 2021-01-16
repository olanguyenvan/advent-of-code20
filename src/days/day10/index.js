var fs = require("fs");
const path = require("path");

import { findAdaptersNumber, findAllAdaptersCombinations } from "./adapters";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    const numbers = contents.split("\n").map(Number);

    solvePart1(numbers);
    solvePart2(numbers);
}

function solvePart1(numbers) {
    const {
        differencesBy1,
        differencesBy2,
        differencesBy3,
    } = findAdaptersNumber(numbers);

    console.log(
        `Answer to part 1 is: Number of 1-jolt differences is ${differencesBy1}  and number of 3-jolt differences is ${differencesBy3} ` +
            `( ${differencesBy1} * ${differencesBy3} = ${
                differencesBy1 * differencesBy3
            }).\n`
    );
}

function solvePart2(numbers) {
    const combinationsCount = findAllAdaptersCombinations(numbers);

    console.log(
        `Answer to part 2 is: Number of different adapters combinations is ${combinationsCount}.\n`
    );
}
