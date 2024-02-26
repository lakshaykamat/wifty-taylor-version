import QUIZ from "../lib/data/quiz.json";
import { Options, Question } from "../types/index";

test("Only one option should be true", async () => {
  QUIZ.forEach((quiz) => {
    quiz.questionsList.forEach((question: Question) => {
      expect(isOnlyOneOptionTrue(question.options)).toBe(true);
    });
  });
}, 30000);

test("Options Array should have a length of 4", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionsList.forEach((question: Question) => {
      expect(question.options.length).toBe(4);
    });
  });
});

test("Count Length of Questions", () => {
  QUIZ.forEach((quiz) => {
    console.log(`${quiz.name}: ${quiz.questionsList.length}`);
  });
});

function checkExplationLength(explanation: string, length: number) {
  return explanation.length > length;
}

function isOnlyOneOptionTrue(options: Options[]) {
  const trueOptions = options.filter((option) => option.isRight);
  return trueOptions.length === 1;
}
