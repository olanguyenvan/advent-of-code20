import { find2FactorsMakingUpSum } from "../../utils/sum";

export function findNumberNotBeingSum(items, preambleLength) {
    const itemsCount = items.length;

    for (let i = 0; i + preambleLength + 1 < itemsCount; i++) {
        const currentPreambleSorted = items
            .slice(i, i + preambleLength)
            .sort((a, b) => a - b);
        const searchValue = items[i + preambleLength];

        if (!find2FactorsMakingUpSum(currentPreambleSorted, searchValue)) {
            return searchValue;
        }
    }
}

export function findContigiousSetSummingUpTo(items, searchValue) {
    const itemsCount = items.length;

    for (let i = 0; i < itemsCount; i++) {
        let sum = 0;
        let j = 0;

        while (sum < searchValue && i + j < itemsCount) {
            sum += items[i + j];
            j += 1;
        }

        if (sum === searchValue) {
            return items.slice(i, i + j);
        }
    }
}
