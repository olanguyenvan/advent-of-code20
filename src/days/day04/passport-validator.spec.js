import {
    hgtValidator,
    hclValidator,
    eclValidator,
    pidValidator,
} from "./passport-validator";

describe("hgtValidator", () => {
    it.each([
        ["160cm", true],
        ["150cm", true],
        ["193cm", true],
        ["59in", true],
        ["70in", true],
        ["76in", true],
        ["150", false],
        ["200cm", false],
        ["200in", false],
        ["20in", false],
        ["50x", false],
    ])("string %s should return %s", (testString, expected) => {
        expect(hgtValidator(testString)).toEqual(expected);
    });
});

describe("hclValidator", () => {
    it.each([
        ["#000000", true],
        ["#aaaaaa", true],
        ["#aaa123", true],
        ["#0000001", false],
        ["0000001", false],
        ["0000001#", false],
    ])("string %s should return %s", (testString, expected) => {
        expect(hclValidator(testString)).toEqual(expected);
    });
});

describe("eclValidator", () => {
    it.each([
        ["amb", true],
        ["blu", true],
        ["brn", true],
        ["gry", true],
        ["grn", true],
        ["hzl", true],
        ["oth", true],
        ["ooth", false],
        ["otho", false],
        ["amboth", false],
    ])("string %s should return %s", (testString, expected) => {
        expect(eclValidator(testString)).toEqual(expected);
    });
});

describe("pidValidator", () => {
    it.each([
        ["123456789", true],
        ["003456789", true],
        ["12345678", false],
        ["12345678a", false],
        ["01234567890", false],
    ])("string %s should return %s", (testString, expected) => {
        expect(pidValidator(testString)).toEqual(expected);
    });
});
