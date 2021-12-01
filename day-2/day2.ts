import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";
const input = loadFile("./input.txt")
  .split("\r\n") // depending on OS
  .map((x) => parseInt(x));

showAnswers([]);
