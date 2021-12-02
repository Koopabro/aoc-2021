import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";
const input = loadFile("./input.txt")
  .split("\r\n")
  .map((x) => parseInt(x));

const answer1 = input.filter((x, ind) => x > input[ind - 1]).length;

const slidingWindow = input.map((x, i) => x + input[i + 1] + input[i + 2]);
const answer2 = slidingWindow.filter(
  (x, ind) => x > slidingWindow[ind - 1]
).length;

showAnswers([answer1, answer2]);

export { answer1, answer2 };
