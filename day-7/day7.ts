import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";
const input = loadFile("./input.txt")
  .split(",")
  .map((x) => parseInt(x));

const answer1 = (input: number[]) => {
  const min = Math.min(...input);
  const max = Math.max(...input);
  let least = 1000000000;
  for (let i = min; i <= max; i++) {
    const totals = input.reduce((a, b) => a + Math.abs(b - i), 0);
    if (totals < least) {
      least = totals;
    }
  }
  return least;
};
const answer2 = (input: number[]) => {
  const min = Math.min(...input);
  const max = Math.max(...input);
  let least2 = 100000000000000;
  for (let i = min; i <= max; i++) {
    const sumTotal = input.reduce((acc, cur): number => {
      const delta = Math.abs(i - cur);
      const driehoeks = 0.5 * delta * (delta + 1);
      return acc + driehoeks;
    }, 0);
    if (sumTotal < least2) {
      least2 = sumTotal;
    }
  }

  return least2;
};

showAnswers([answer1(input), answer2(input)]);

export { answer1, answer2 };
