import { answer1, answer2 } from "./day3";
const input = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
].map((x) => x.split("").map((x) => parseInt(x)));

test("uses the first method to transverse", () => {
  expect(answer1(input)).toBe(198);
});

test("uses the second method to transverse", () => {
  expect(answer2(input)).toBe(X);
});
