import loadFile from "../libs/loadFile";
import showAnswers from "../libs/showAnswer";
const input = loadFile("./input.txt")
  .split("\n")
  .map((x) => x.split(" "))
  .map((x): [string, number] => [x[0], parseInt(x[1])]); // depending on OS

const updateLocation = (
  startingPosition: number[],
  direction: string,
  steps: number
): number[] => {
  const [x, y] = startingPosition;
  switch (direction) {
    case "down":
      return [x, y + steps];
    case "up":
      return [x, y - steps];
    case "forward":
      return [x + steps, y];
    default:
      return [x, y];
  }
};

//part 1
let location = [0, 0]; // y is not absolute (y = -y)
for (const x of input) {
  location = updateLocation(location, x[0], x[1]);
}

const answer1 = location[0] * location[1];

//part 2

const updateAim = (
  startingPosition: number[],
  direction: string,
  steps: number
): number[] => {
  const [x, aim, y] = startingPosition;
  switch (direction) {
    case "down":
      return [x, aim + steps, y];
    case "up":
      return [x, aim - steps, y];
    case "forward":
      return [x + steps, aim, y + aim * steps];
    default:
      return [x, aim, y];
  }
};

let location2 = [0, 0, 0];
for (const x of input) {
  location2 = updateAim(location2, x[0], x[1]);
  console.log(location2);
}

const answer2 = location2[0] * location2[2];

showAnswers([answer1, answer2]);
