var fs = require("fs");
const path = require("path");

import {
    findMissingSeatNumberWhoseNeighboursAreKnown,
    getSeatNumber,
} from "./seats";

fs.readFile(path.resolve(__dirname, "input"), "utf8", main);

// ========================
function main(err, contents) {
    const seatSpecifications = contents.split("\n");

    solvePart1(seatSpecifications);
    solvePart2(seatSpecifications);
}

function solvePart1(seatSpecifications) {
    const seatNumbers = seatSpecifications.map(getSeatNumber);
    const highestSeatNumber = Math.max(...seatNumbers);

    console.log(
        `Answer to part 1 is: The highest seat number is ${highestSeatNumber}.\n`
    );
}

function solvePart2(seatSpecifications) {
    const seatNumber = findMissingSeatNumberWhoseNeighboursAreKnown(
        seatSpecifications
    );

    console.log(`Answer to part 2 is: Your seat number is ${seatNumber}.\n`);
}
