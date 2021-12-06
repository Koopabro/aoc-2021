import { answer1, answer2 } from "./day6";
const input = [3, 4, 3, 1, 2];

test("uses the first method to transverse", () => {
  expect(answer1(input, 80)).toBe(5934);
});

// test("uses the second method to transverse", () => {
//   expect(answer2(input)).toBe(X);
// });
