import { passwordContainsLetterOnlyOnceInIndices } from "./password-validator";

describe("passwordContainsLetterOnlyOnceInIndices", () => {
    it("should return 7", () => {
        const test_password = "ola";
        const indicesToCheck = [1, 3];
        const letterToCheck = "a";
        const expected = true;

        expect(
            passwordContainsLetterOnlyOnceInIndices(
                test_password,
                indicesToCheck,
                letterToCheck
            )
        ).toEqual(expected);
    });
});
