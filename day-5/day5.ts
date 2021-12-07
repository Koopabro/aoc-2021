import { listenerCount } from "process";
import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";
const input = loadFile("./input.txt")
  .split("\n")
  .map((line) => line.split(" -> "))
  .map((line) => line.map((value) => value.split(",")));

console.log(input);
