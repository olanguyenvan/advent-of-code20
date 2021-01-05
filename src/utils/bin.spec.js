import { binToDec } from "./bin";

describe("binToDec", () => {
    it.each([
        ["0", 0],
        ["1", 1],
        ["01", 1],
        ["11", 3],
        ["101", 5],
        ["111", 7],
        ["1000", 8],
        ["10000", 16],
        ["11110", 30],
    ])(
        "Bin represantion %s should return %s in Dec",
        (testString, expected) => {
            expect(binToDec(testString)).toEqual(expected);
        }
    );
});
