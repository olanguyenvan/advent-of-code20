var fs = require("fs");
const path = require("path");

import {
    getValueBeforeSecondLoop,
    getValueAfterTermination,
    parseInstruction,
    parseInput,
} from "./code";

describe("parseInstruction", () => {
    it.each([
        ["nop +0", { operation: "NOP", argument: 0 }],
        ["acc +0", { operation: "ACC", argument: 0 }],
        ["acc +1", { operation: "ACC", argument: 1 }],
        ["acc +1", { operation: "ACC", argument: 1 }],
        ["jmp -5", { operation: "JMP", argument: -5 }],
        ["jmp +66", { operation: "JMP", argument: 66 }],
    ])("string %s", (testString, expected) => {
        expect(parseInstruction(testString)).toEqual(expected);
    });
});

describe("getValueBeforeSecondLoop", () => {
    it("short input", async () => {
        await fs.readFile(
            path.resolve(__dirname, "input"),
            "utf8",
            (err, contents) => {
                const instructions = parseInput(contents);
                const [value] = getValueBeforeSecondLoop(instructions);

                expect(value).toBe(5);
            }
        );
    });
});

describe("getValueAfterTermination", () => {
    it("short input", async () => {
        await fs.readFile(
            path.resolve(__dirname, "input"),
            "utf8",
            (err, contents) => {
                const instructions = parseInput(contents);
                const value = getValueAfterTermination(instructions);

                expect(value).toBe(8);
            }
        );
    });
});
