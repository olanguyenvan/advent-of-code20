export function find2FactorsMakingUpSum(entries, searchValue) {
    var left = 0;
    var right = entries.length - 1;

    var leftValue, rightValue, nextLeftValue;

    while (left <= right) {
        leftValue = entries[left];
        rightValue = entries[right];

        nextLeftValue = entries[left + 1];

        if (leftValue + rightValue === searchValue) {
            return [leftValue, rightValue];
        }

        if (nextLeftValue + rightValue <= searchValue) {
            left = left + 1;
        } else {
            right = right - 1;
        }
    }

    return;
}

export function find3FactorsMakingUp2020(entries) {
    const searchValue = 2020;

    for (var i = 0; i < entries.length; i++) {
        const tmpFirstFactor = entries[i];
        const tmpSearchValue = searchValue - tmpFirstFactor;
        const result = find2FactorsMakingUpSum(entries, tmpSearchValue);

        if (result) {
            return [tmpFirstFactor, ...result];
        }
    }
}
