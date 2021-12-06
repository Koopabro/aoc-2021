import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";
const input = loadFile("./input.txt").split(","); // Windows \r\n, Linux \n
const answer1 = (input: any[], maxDays: number): number => {
  let fishArray: number[] = [...input];
  for (let days = 0; days < maxDays; days++) {
    for (let i = 0; i < fishArray.length; i++) {
      if (fishArray[i] === 0) {
        fishArray.push(9); // 1 extra want deze gaat er naturlijk gewoon langs
        fishArray[i] = 6;
      } else {
        fishArray[i]--;
      }
    }
  }
  return fishArray.length;
};
const answer2 = (input: any[], maxDays: number) => {
  let fishLifeTime: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let life of input) {
    fishLifeTime[life]++;
  }
  for (let days = 0; days < maxDays; days++) {
    const shift = fishLifeTime.shift();
    const bevallenVissen: number = shift != undefined ? shift : 0;
    fishLifeTime[8] = bevallenVissen;
    fishLifeTime[6] += bevallenVissen;
    console.log(bevallenVissen);
  }
  return fishLifeTime.reduce((a, b) => a + b);
};

showAnswers([answer1(input, 80), answer2(input, 256)]);

export { answer1, answer2 };
