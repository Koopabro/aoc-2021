import { answer1, answer2 } from "./day8";
import loadFile from "../libs/loadFile";
const input = loadFile("./testput.txt")
  .split("\n")
  .map((inp) => inp.split(" | "))
  .map((line) => line.map((x) => x.split(" ")));

test("Something meaningful about part 1", () => {
  expect(answer1(input)).toBe(26);
});

test("Something meaningful about part 2", () => {
  expect(answer2(input)).toBe(61229);
});
