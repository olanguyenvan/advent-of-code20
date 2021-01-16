export function findAdaptersNumber(joltages) {
    joltages.sort((a, b) => a - b);

    let tmpJoltage = 0;
    let differencesBy1 = 0;
    let differencesBy3 = 0;

    for (let i = 0; i < joltages.length; i++) {
        const value = joltages[i];

        switch (value - tmpJoltage) {
            case 1:
                differencesBy1 += 1;
                break;
            case 3:
                differencesBy3 += 1;
                break;
        }

        tmpJoltage = value;
    }

    return {
        differencesBy1,
        differencesBy3: differencesBy3 + 1,
    };
}
