let currentQuestion = 0;
let score = 0;

const questions = [
	{
		question: "What is the capital of France?",
		options: ["Paris", "London", "Berlin", "Rome"],
		correct: 0
	},
	{
		question: "What is the largest planet in our solar system?",
		options: ["Earth", "Saturn", "Jupiter", "Uranus"],
		correct: 2
	},
    {
    question: "What does PHP stand for?",
		options: [
            " Hypertext Preprocessor",
            " Hometext Programming",
            " Hypertext Preprogramming",
            " Programming Hypertext Preprocessor"
        ],
		correct: 0
    },
    














	// Add more questions here
];

const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const resultElement = document.querySelector(".result");
const nextButton = document.querySelector(".next-question");



nextButton.addEventListener("click", () => {
	currentQuestion++;
	displayQuestion();
});

optionsElement.addEventListener("click", (e) => {
	const selectedOption = e.target;
	const correctOption = questions[currentQuestion].correct;
	if (selectedOption.dataset.correct === "true") {
		score++;
		resultElement.textContent = "Correct!";
	} else {
		resultElement.textContent = "Incorrect!";
	}
	nextButton.style.display = "block";
});

function displayQuestion() {
	questionElement.textContent = questions[currentQuestion].question;
	optionsElement.innerHTML = "";
	questions[currentQuestion].options.forEach((option, index) => {
		const button = document.createElement("button");
		button.textContent = option;
		button.dataset.correct = index === questions[currentQuestion].correct;
		optionsElement.appendChild(button);
	});
	nextButton.style.display = "none";
	resultElement.textContent = "";
}

displayQuestion();

