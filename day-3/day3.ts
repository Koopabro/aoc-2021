import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";
const input = loadFile("./input.txt")
  .split("\n")
  .map((x) => x.split("").map((x: string) => parseInt(x))); // Windows \r\n, Linux \n

// part 1;
const answer1 = (input: any[]): number => {
  const verticalArrays = input[0].map((x: number, i: number) =>
    input.map((x) => x[i])
  );
  const gamma = verticalArrays
    .map((column: number[]) => {
      return column.reduce((acc: number, cur: number) =>
        cur === 1 ? acc + cur : acc
      );
    })
    .map((x: number) => (x > input.length / 2 ? 1 : 0));
  const epsilon = gamma.map((x: number) => Math.abs(x - 1));
  const gammaAnswer = parseInt(gamma.join(""), 2);
  const epsilonAnswer = parseInt(epsilon.join(""), 2);
  return gammaAnswer * epsilonAnswer;
};

const answer2 = (input: any[]): number => {
  const mostCommon = (index: number): number =>
    input.map((x) => x[index]).reduce((acc, cur) => acc + cur) >
    input.length / 2
      ? 1
      : 0;

  const oxygenRating = parseInt(oxygenFilter.join(""), 2);
  return oxygenRating;
};

showAnswers([answer1(input), answer2(input)]);

export { answer1, answer2 };
