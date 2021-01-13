import { find2FactorsMakingUpSum } from "../../utils/sum";

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
