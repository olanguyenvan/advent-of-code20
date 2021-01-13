import { find2FactorsMakingUpSum } from "./sum";

describe("find2FactorsMakingUpSum", () => {
    it.each([
        [
            [[0, 1], 1],
            [0, 1],
        ],
        [
            [[0, 1, 2], 1],
            [0, 1],
        ],
        [
            [[0, 1, 2, 3, 4, 5], 4],
            [0, 4],
        ],
        [
            [[0, 1, 2, 3, , 5], 4],
            [1, 3],
        ],
        [
            [[1, 1], 2],
            [1, 1],
        ],
        [[[1, 1], 1], null],
    ])("string %s should return %s", (test_example, expected) => {
        console.log(test_example);
        expect(find2FactorsMakingUpSum(...test_example)).toEqual(expected);
    });
});
