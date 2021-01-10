var fs = require("fs");
const path = require("path");

import {
    countBagsContainingBag,
    countHowManyBagsInside,
    parseBagListInformation,
} from "./bags";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    const bags = contents.split("\n");
    const bagColorToCheck = "shiny gold";

    solvePart1(bags, bagColorToCheck);
    solvePart2(bags, bagColorToCheck);
}

function solvePart1(bags, bagColorToCheck) {
    const bagsChildrenInformation = parseBagListInformation(bags);
    const count = countBagsContainingBag(
        bagsChildrenInformation,
        bagColorToCheck
    );

    console.log(
        `Answer to part 1 is: Number of bag colors that can eventually contain at least one ${bagColorToCheck} bag is ${count}.\n`
    );
}

function solvePart2(bags, bagColorToCheck) {
    const bagsChildrenInformation = parseBagListInformation(bags);
    const count = countHowManyBagsInside(
        bagsChildrenInformation,
        bagColorToCheck
    );

    console.log(
        `Answer to part 2 is: Number of bag required inside my ${bagColorToCheck}  is ${count}.\n`
    );
}
