var fs = require("fs");
const path = require("path");

import {
    passwordHasValidAmountOfLetter,
    passwordContainsLetterOnlyOnceInIndices,
} from "./password-validator";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    const linesAsStrings = contents.split("\n").filter(Boolean);

    solvePart1(linesAsStrings);
    solvePart2(linesAsStrings);
}

const REGEX_EXPRESSION = /(\d+)-(\d+) ([a-z]): ([a-z]+)/;

function solvePart1(lines) {
    const validLinesCount = lines.filter((line) => {
        const [
            _,
            minCountOfLetter,
            maxCountOFLetter,
            letterToCheck,
            password,
        ] = line.match(REGEX_EXPRESSION);

        return passwordHasValidAmountOfLetter(
            password,
            minCountOfLetter,
            maxCountOFLetter,
            letterToCheck
        );
    }).length;

    console.log(`Answer to part 1 is: ${validLinesCount} valid lines.\n`);
}

// ==============
function solvePart2(lines) {
    const validLinesCount = lines.filter((line) => {
        const [
            _,
            firstIndexOfLetter,
            secondIndexOfLetter,
            letterToCheck,
            password,
        ] = line.match(REGEX_EXPRESSION);

        return passwordContainsLetterOnlyOnceInIndices(
            password,
            [firstIndexOfLetter, secondIndexOfLetter],
            letterToCheck
        );
    }).length;

    console.log(`Answer to part 2 is: ${validLinesCount} valid lines.\n`);
}
