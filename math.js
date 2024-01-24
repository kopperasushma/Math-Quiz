const questionEl = document.getElementById("question");
let storedAnswer;
const questionFormEl = document.getElementById("questionForm");
let score = 0;
const scoreEl = document.getElementById("score");

const firstRandomNumber = Math.floor(Math.random() * 10) + 1;
const secondRandomNumber = Math.floor(Math.random() * 10) + 1;

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// console.log (randomNumber);
const generateQuestion = () => {
  const randomNumber1 = randomNumber(1, 10);
  const randomNumber2 = randomNumber(1, 10);
  //   console.log(randomNumber1, randomNumber2);
  const question = `Q.What is ${randomNumber1} Multiply By ${randomNumber2}?`;
  const answer = randomNumber1 * randomNumber2;
  return { question, answer };
};

const showQuestion = () => {
  const { question, answer } = generateQuestion();
  if (question && answer) {
    questionEl.innerText = question;
    storedAnswer = answer;
  }
};
showQuestion();

const checkAnswer = (event) => {
  event.preventDefault();
  const formData = new FormData(questionFormEl);
  const userAnswer = +formData.get("answer");
  if (userAnswer === storedAnswer) {
    score += 1;
  } else {
    score -= 1;
  }
  scoreEl.innerText = score;
  event.target.reset();
  showQuestion();
  console.log("answer", userAnswer);
};
