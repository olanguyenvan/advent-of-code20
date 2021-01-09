var fs = require("fs");
const path = require("path");

import {
    countValidPassportsPart1,
    countValidPassportsPart2,
} from "./passport-validator";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

function parsePassportInput(passportInput) {
    return passportInput.split(/\s/).reduce((acc, passwordField) => {
        const [key, value] = passwordField.split(":");
        acc[key] = value;
        return acc;
    }, {});
}

// ========================
function main(err, contents) {
    const passportInputs = contents.split("\n\n");
    const passports = passportInputs.map(parsePassportInput);

    solvePart1(passports);
    solvePart2(passports);
}

function solvePart1(passports) {
    const validPassportsCount = countValidPassportsPart1(passports);

    console.log(
        `Answer to part 1 is: There are ${validPassportsCount} valid passports.\n`
    );
}

function solvePart2(passports) {
    const validPassportsCount = countValidPassportsPart2(passports);

    console.log(
        `Answer to part 2 is: There are ${validPassportsCount} valid passports.\n`
    );
}
