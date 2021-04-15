
const question = document.getElementById('qtn');
const choices = Array.from(document.getElementsByClassName('choice-text'));
// console.log(choices);


let currentQuestion = [];
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What will happen if reverse() and join() methods are used simultaneously?",
        choice1: "Reverses and stores in the same array",
        choice2: "Reverses and concatenates the elements of the array",
        choice3: "Reverses",
        choice4: "Stores the elements of an array in normal order",
        choice5: "All the above",
        answer: 1,
    },
    {
        question: "The pop() method of the array does which of the following task?",
        choice1: "decrements the total length by 1",
        choice2: "increments the total length by 1",
        choice3: "prints the first element but no effect on the length",
        choice4: "updates the element",
        choice5: "All the above",
        answer: 1,
    },
    {
        question: "The method or operator used to identify the array is __________",
        choice1: "isarrayType()",
        choice2: "==",
        choice3: "===",
        choice4: "typeof",
        choice5: "instanceof",
        answer: 1,
    },
    {
        question: "The reduce and reduceRight methods follow a common operation called __________",
        choice1: "filter and fold",
        choice2: "inject and fold",
        choice3: "finger and fold",
        choice4: "fold",
        choice5: "finger",
        answer: 4,
    },
    {
        question: "The primary purpose of the array map() function is that it __________",
        choice1: "maps the elements of another array into itself",
        choice2: "passes each element of the array and returns the necessary mapped elements",
        choice3: "passes each element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function",
        choice4: "pass the elements of the array into another array",
        choice5: "All the above",
        answer: 3,
    }

]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    qtn.innerText = currentQuestion.question;

    choices.forEach(choices)
}


startGame(); 