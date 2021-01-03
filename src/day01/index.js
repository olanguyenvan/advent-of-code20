var fs = require("fs");
const path = require("path");

import {
    find2FactorsMakingUpSum,
    find3FactorsMakingUp2020,
} from "./factors-sum";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    const entries = contents.split("\n");
    const entriesAsNumbers = entries.map((e) => parseInt(e));

    solvePart1(entriesAsNumbers);
    solvePart2(entriesAsNumbers);
}

// ==============

function solvePart1(entries) {
    entries.sort();
    const [factor1, factor2] = find2FactorsMakingUpSum(entries, 2020);

    console.log(
        `Answer to part 1 is: ${factor1} * ${factor2} = ${factor1 * factor2}\n`
    );
}

// ==============

function solvePart2(entries) {
    entries.sort();
    const [factor1, factor2, factor3] = find3FactorsMakingUp2020(entries);

    console.log(
        `Answer to part 1 is: ${factor1} * ${factor2} * ${factor3} = ${
            factor1 * factor2 * factor3
        }\n`
    );
}
