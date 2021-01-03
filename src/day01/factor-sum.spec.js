import { find2FactorsMakingUpSum } from "./factors-sum";

describe("find2FactorsMakingUpSum", () => {
    it("should return 7", () => {
        const test_example = [1, 2, 3, 5, 7, 11];
        const expected = [3, 7];

        expect(find2FactorsMakingUpSum(test_example, 10)).toEqual(expected);
    });
});
