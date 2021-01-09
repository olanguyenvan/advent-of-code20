import { binToDec } from "../../utils/bin";

const SEAT_SPECIFICATION_REGEX = /^([FB]{7})([RL]{3})$/;
const PLANE_COLUMN_COUNT = 8;
const PLANE_ROW_COUNT = 128;
const PLANE_CAPACITY = PLANE_COLUMN_COUNT * PLANE_ROW_COUNT;

function parseSeatSpecification(seatSpecification) {
    const groups = seatSpecification.match(SEAT_SPECIFICATION_REGEX);

    if (!groups) {
        return null;
    }

    const [_, rowSpecification, columnSpecification] = groups;

    return { rowSpecification, columnSpecification };
}

export function getRowNumber(rowSpecification) {
    const binaryRepresantation = rowSpecification
        .split("F")
        .join("0")
        .split("B")
        .join("1");

    return binToDec(binaryRepresantation);
}

export function getColumnNumber(columnSpecification) {
    const binaryRepresantation = columnSpecification
        .split("L")
        .join("0")
        .split("R")
        .join("1");

    return binToDec(binaryRepresantation);
}

export function getSeatNumber(seatSpecification) {
    const { rowSpecification, columnSpecification } = parseSeatSpecification(
        seatSpecification
    );
    const rowNumber = getRowNumber(rowSpecification);
    const columnNumber = getColumnNumber(columnSpecification);

    return rowNumber * PLANE_COLUMN_COUNT + columnNumber;
}

export function findMissingSeatNumberWhoseNeighboursAreKnown(
    seatSpecifications
) {
    const planeSeats = new Array(PLANE_CAPACITY).fill(false);

    for (const seatSpecification of seatSpecifications) {
        const seatNumber = getSeatNumber(seatSpecification);
        planeSeats[seatNumber] = true;
    }

    for (let i = 1; i < PLANE_CAPACITY - 1; i++) {
        if (planeSeats[i - 1] && !planeSeats[i] && planeSeats[i + 1]) {
            return i;
        }
    }
}
