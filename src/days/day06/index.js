var fs = require("fs");
const path = require("path");

import {
    countQuestionsAnsweredYesAtLeastOnce,
    countQuestionsAnsweredYesByEveryone,
} from "./forms";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    const groups = contents.split("\n\n");

    solvePart1(groups);
    solvePart2(groups);
}

function solvePart1(groups) {
    const countsSum = groups.reduce(
        (acc, group) => acc + countQuestionsAnsweredYesAtLeastOnce(group),
        0
    );

    console.log(
        `Answer to part 1 is: Sum of count of questions per group where at least one person answered yes is ${countsSum}.\n`
    );
}

function solvePart2(groups) {
    const countsSum = groups.reduce(
        (acc, group) => acc + countQuestionsAnsweredYesByEveryone(group),
        0
    );

    console.log(
        `Answer to part 2 is: Sum of questions per group where everyone answered yes is ${countsSum}.\n`
    );
}
