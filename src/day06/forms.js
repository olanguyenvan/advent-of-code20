export function countQuestionsAnsweredYesAtLeastOnce(group) {
    const questions = group.split(/\s/).join("").split("");
    const uniqueQuestions = new Set(questions);

    return uniqueQuestions.size;
}

export function countQuestionsAnsweredYesByEveryone(group) {
    const answers = group.split(/\s/);
    const peopleCount = answers.length;

    const questionsCount = {};

    for (const answer of answers) {
        for (const questionLetter of answer) {
            if (!questionsCount.hasOwnProperty(questionLetter)) {
                questionsCount[questionLetter] = 0;
            }

            questionsCount[questionLetter] += 1;
        }
    }
    return Object.values(questionsCount).filter(
        (questionCount) => questionCount === peopleCount
    ).length;
}
