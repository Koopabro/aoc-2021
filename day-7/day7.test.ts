import { answer1, answer2 } from "./day7";
const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

test("Least amount of fuel is", () => {
  expect(answer1(input)).toBe(37);
});

test("Least amount of driehoeks fuel is", () => {
  expect(answer2(input)).toBe(168);
});
