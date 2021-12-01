import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";
const input = loadFile("./input.txt")
  .split("\r\n")
  .map((x) => parseInt(x));

const answer1 = input.filter((x, ind) => x > input[ind - 1]).length;

showAnswers([answer1]);
