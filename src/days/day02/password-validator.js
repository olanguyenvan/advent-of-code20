export function passwordHasValidAmountOfLetter(
    password,
    minCountOfLetter,
    maxCountOFLetter,
    letterToCheck
) {
    const letterOccurencesCount = password
        .split("")
        .filter((char) => char === letterToCheck).length;

    return (
        letterOccurencesCount >= minCountOfLetter &&
        letterOccurencesCount <= maxCountOFLetter
    );
}

export function passwordContainsLetterOnlyOnceInIndices(
    password,
    indices,
    letterToCheck
) {
    const indicesContainingLetter = indices.reduce((acc, index) => {
        if (password[index - 1] === letterToCheck) {
            return acc + 1;
        }
        return acc;
    }, 0);

    return indicesContainingLetter === 1;
}
