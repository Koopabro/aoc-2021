import { answer1, answer2 } from "./day2";

const input = [
  ["forward", 5],
  ["down", 5],
  ["forward", 8],
  ["up", 3],
  ["down", 8],
  ["forward", 2],
];

test("uses the first method to transverse", () => {
  expect(answer1(input)).toBe(150);
});

test("uses the second method to transverse", () => {
  expect(answer2(input)).toBe(900);
});
