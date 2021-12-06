import { parse } from "path/posix";
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
  let oxygenRatings = [...input];
  let co2Ratings = [...input];

  //oxy
  let index = 0;
  while (oxygenRatings.length > 1) {
    const mostCommon =
      oxygenRatings.map((x) => x[index]).reduce((a, b) => a + b) /
        oxygenRatings.length >=
      0.5
        ? 1
        : 0;
    oxygenRatings = oxygenRatings.filter((x) => x[index] === mostCommon);
    index++;
  }

  //co
  index = 0;
  while (co2Ratings.length > 1) {
    const leastCommon =
      co2Ratings.map((x) => x[index]).reduce((a, b) => a + b) /
        co2Ratings.length >=
      0.5
        ? 0
        : 1;
    co2Ratings = co2Ratings.filter((x) => x[index] === leastCommon);
    index++;
  }
  return (
    parseInt(oxygenRatings[0].join(""), 2) * parseInt(co2Ratings[0].join(""), 2)
  );
};

showAnswers([answer1(input), answer2(input)]);

export { answer1, answer2 };
