import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";

const input: any[] = loadFile("./input.txt")
  .split("\n")
  .map((inp) => inp.split(" | "))
  .map((line) => line.map((x) => x.split(" ")));

const answer1 = (input: any[]): number => {
  const transformedInput = input
    .map((x) => x[1])
    .map((x) => x.map((y: string) => y.length));
  const counts = transformedInput.map((x) => {
    return x.filter((x: number) => x === 2 || x === 4 || x === 3 || x === 7)
      .length;
  });
  return counts.reduce((a, b) => a + b);
};

const answer2 = (input: any[]) => {
  const decodedMessages = input
    .map((line) => {
      return line[1].map((nmb: string) => {
        const four: string[] = Array.from(
          line[0].filter((y: string) => y.length === 4)[0]
        );
        const seven: string[] = Array.from(
          line[0].filter((y: string) => y.length === 3)[0]
        );
        const six: string[] = Array.from(
          line[0]
            .filter((y: string) => y.length === 6)
            .filter(
              (y: string) => !seven.every((x) => Array.from(y).includes(x))
            )[0]
        );
        const cmpNmb: string[] = Array.from(nmb);
        if (nmb.length === 2) {
          return 1;
        } else if (nmb.length === 4) {
          return 4;
        } else if (nmb.length === 3) {
          return 7;
        } else if (nmb.length === 7) {
          return 8;
        } else if (nmb.length === 6) {
          if (seven.every((x) => cmpNmb.includes(x))) {
            if (four.every((x) => cmpNmb.includes(x))) {
              return 9;
            } else {
              return 7;
            }
          } else {
            return 6;
          }
        } else if (nmb.length === 5) {
          if (cmpNmb.every((x) => six.includes(x))) {
            return 5;
          } else if (seven.every((x) => cmpNmb.includes(x))) {
            return 3;
          } else return 2;
        }
      });
    })
    .map((x) => parseInt(x.join("")));
  return decodedMessages.reduce((a, b) => a + b, 0);
};

showAnswers([answer1(input), answer2(input)]);

export { answer1, answer2 };
