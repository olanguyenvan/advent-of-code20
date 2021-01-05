export function binToDec(binString) {
    let dec = 0;
    const binStringLength = binString.length;

    for (let index = 0; index < binStringLength; index++) {
        const binDigit = binString[binStringLength - index - 1];

        if (binDigit === "1") {
            dec += Math.pow(2, index);
        }
    }

    return dec;
}
