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
