import { getColumnNumber, getRowNumber, getSeatNumber } from "./seats";

describe("getColumnNumber", () => {
    it.each([
        ["R", 1],
        ["RR", 3],
        ["RRR", 7],
        ["L", 0],
        ["LL", 0],
        ["LLL", 0],
        ["LR", 1],
        ["RL", 2],
        ["RLL", 4],
        ["RLR", 5],
        ["RRL", 6],
        ["RRR", 7],
    ])("string %s should return %s", (testString, expected) => {
        expect(getColumnNumber(testString)).toEqual(expected);
    });
});

describe("getRowNumber", () => {
    it.each([
        ["F", 0],
        ["FF", 0],
        ["B", 1],
        ["BB", 3],
        ["FFFFFFF", 0],
        ["BFFFFFF", 64],
        ["BFFFFFB", 65],
        ["BBBBBBF", 126],
        ["BBBBBBB", 127],
    ])("string %s should return %s", (testString, expected) => {
        expect(getRowNumber(testString)).toEqual(expected);
    });
});

describe("getSeatNumber", () => {
    it.each([
        ["FFFFFFFLLL", 0],
        ["FFFFFFFLLR", 1],
        ["FFFFFFFRLL", 4],
        ["FFFFFFFRRR", 7],
        ["FFFFFFBLLL", 8],
        ["FFFBBBFRRR", 119],
        ["BFFFBBFRRR", 567],
        ["BBFFBBFRLL", 820],
        ["BBBBBBBRRR", 1023],
    ])("string %s should return %s", (testString, expected) => {
        expect(getSeatNumber(testString)).toEqual(expected);
    });
});
