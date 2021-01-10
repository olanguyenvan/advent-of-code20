const INSTRUCTION_REGEX = /^(nop|acc|jmp) ([\+-][0-9]+)$/;

export function parseInstruction(instruction) {
    const groups = instruction.match(INSTRUCTION_REGEX);
    const [_, operation, argument] = groups;

    return { operation: operation.toUpperCase(), argument: Number(argument) };
}

export function getValueBeforeSecondLoop(instructions) {
    const visitedInstructions = {};
    const instructionsCount = instructions.length;
    let index = 0;
    let accumulator = 0;

    while (!visitedInstructions[index] && index < instructionsCount) {
        visitedInstructions[index] = true;

        const instruction = instructions[index];
        const { operation, argument } = instruction;
        switch (operation) {
            case "NOP":
                index += 1;
                break;
            case "JMP":
                index += argument;
                break;
            case "ACC": {
                accumulator += argument;
                index += 1;
            }
        }
    }

    return [accumulator, index];
}

export function getValueAfterTermination(instructions) {
    const instructionsCount = instructions.length;

    for (let i = 0; i < instructionsCount; i++) {
        const instruction = instructions[i];
        const { operation } = instruction;

        const instructionsWithOneChange = [...instructions];

        switch (operation) {
            case "NOP":
                instructionsWithOneChange[i] = {
                    ...instruction,
                    operation: "JMP",
                };
                break;
            case "JMP":
                instructionsWithOneChange[i] = {
                    ...instruction,
                    operation: "NOP",
                };
                break;
            default:
                continue;
        }

        const [accumulator, index] = getValueBeforeSecondLoop(
            instructionsWithOneChange
        );

        if (index === instructionsCount) {
            return accumulator;
        }
    }
}
