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

    return null;
}
