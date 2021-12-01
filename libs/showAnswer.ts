const showAnswers = (answers: any[]) => {
  answers.map((answer: number, i: number) =>
    console.log(`The answer of part ${i + 1} is:\n${answer}`)
  );
};

export default showAnswers;
