const INSTRUCTION_REGEX = /^(nop|acc|jmp) ([\+-][0-9]+)$/;

export function parseInstruction(instruction) {
    const groups = instruction.match(INSTRUCTION_REGEX);
    const [_, operation, argument] = groups;

    return { operation: operation.toUpperCase(), argument: Number(argument) };
}

export function getValueBeforeSecondLoop(instructions) {
    const visitedInstructions = {};
    let index = 0;
    let accumulator = 0;

    while (!visitedInstructions[index]) {
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

    return accumulator;
}
