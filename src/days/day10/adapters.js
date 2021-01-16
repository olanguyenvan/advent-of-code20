export function findAdaptersNumber(adapters) {
    adapters.sort((a, b) => a - b);

    let tmpJoltage = 0;
    let differencesBy1 = 0;
    let differencesBy2 = 0;
    let differencesBy3 = 0;

    for (let i = 0; i < adapters.length; i++) {
        const value = adapters[i];

        switch (value - tmpJoltage) {
            case 1:
                differencesBy1 += 1;
                break;
            case 2:
                differencesBy2 += 1;
                break;
            case 3:
                differencesBy3 += 1;
                break;
        }

        tmpJoltage = value;
    }

    return {
        differencesBy1,
        differencesBy2,
        differencesBy3: differencesBy3 + 1,
    };
}

const VALID_ADAPTERS = [1, 2, 3];

export function findAllAdaptersCombinations(adapters) {
    adapters.unshift(0);
    adapters.sort((a, b) => a - b);

    const adaptersCount = adapters.length;
    const adaptersCombinations = new Array(adaptersCount);
    adaptersCombinations.fill(0);
    adaptersCombinations[adaptersCount - 1] = 1;

    for (let i = adaptersCount - 1; i >= 0; i--) {
        const value = adapters[i];

        for (let j = 1; j <= 3; j++) {
            const neighbourIndex = i - j;
            const neighbourValue = adapters[neighbourIndex];

            if (VALID_ADAPTERS.includes(value - neighbourValue)) {
                adaptersCombinations[neighbourIndex] += adaptersCombinations[i];
            }
        }
    }

    return adaptersCombinations[0];
}
