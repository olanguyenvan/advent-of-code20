import { parseInstruction } from "./code";

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
