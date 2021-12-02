import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";
const input = loadFile("./input.txt").split("\r\n"); // Windows \r\n, Linux \n

//challenge of the day: use as much objects as possible

const answer1 = (input: any[]): number => {};
const answer2 = (input: any[]): number => {};

showAnswers([answer1(input), answer2(input)]);

export { answer1, answer2 };
