const questions = [
  {
    question: "What are the 3 forms that matter can exist in according to the video?",
    answers: [
      { text: "Solids, liquids and gasses", correct: true },
      { text: "Elements, compounds, and mixtures", correct: false },
      { text: "Protons, neutrons, and electrons", correct: false },
      { text: "Metals, non-metals, and metalloids", correct: false }
    ]
  },
  {
    question: "Who was the first scientist to group elements based on their properties?",
    answers: [
      { text: "Dmitri Mendeleev", correct: false },
      { text: "Henry Moseley", correct: false },
      { text: "Johann Wolfgang Dobereiner", correct: true },
      { text: "Newlands", correct: false }
    ]
  },
  {
    question: "What was the main limitation of Dobereiner's triads classification system?",
    answers: [
      { text: "It only worked for a small number of elements", correct: true },
      { text: "It did not consider the atomic mass of the elements.", correct: false },
      { text: "It was based on the physical appearance of the elements, not their properties.", correct: false },
      { text: "It did not take into account the order of discovery of the elements.", correct: false }
    ]
  },
  {
    question: "What is the name of the classification system that grouped elements based on increasing atomic mass?",
    answers: [
      { text: "Dobereiner's triads", correct: false },
      { text: "Newlands octaves", correct: true },
      { text: "Mendeleev's periodic table", correct: false },
      { text: "Modern periodic table", correct: false }
    ]
  },
  {
    question: "What was the main limitation of Newlands octaves classification system?",
    answers: [
      { text: "It placed elements with very different properties in the same group.", correct: false },
      { text: "It did not consider the chemical properties of the elements.", correct: false },
      { text: "It only worked for the first 56 elements discovered.", correct: true },
      { text: "It did not predict the existence of new elements.", correct: false }
    ]
  },
  {
    question: "What property did Mendeleev believe was the most fundamental property of an element?",
    answers: [
      { text: "Density", correct: false },
      { text: "Melting Point", correct: false },
      { text: "Atomic mass", correct: false },
      { text: "Atomic number", correct: true }
    ]
  },
  {
    question: "What are the horizontal rows in the periodic table called?",
    answers: [
      { text: "Groups", correct: false },
      { text: "Blocks", correct: false },
      { text: "Periods", correct: true },
      { text: "Families", correct: false }
    ]
  },
  {
    question: "What are the vertical columns in the periodic table called?",
    answers: [
      { text: "Groups", correct: true },
      { text: "Blocks", correct: false },
      { text: "Periods", correct: false },
      { text: "Families", correct: false }
    ]
  },
  {
    question: "What was one of the limitations of Mendeleev's periodic table?",
    answers: [
      { text: "It could not predict the properties of new elements.", correct: true },
      { text: "It did not have a place for hydrogen", correct: false },
      { text: "It placed elements with higher atomic mass before elements with lower atomic mass.", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "What discovery led to the modern periodic table being based on atomic number instead of atomic mass?",
    answers: [
      { text: "The discovery of the proton.", correct: false },
      { text: "The discovery of the electron", correct: true },
      { text: "The discovery of the neutron.", correct: false },
      { text: "The discovery of the neucleus", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const nameInput = document.getElementById("name-input");
const nameSubmitButton = document.getElementById("name-submit");
let playerName = "";

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showNameInput();
}

function showNameInput() {
  questionElement.innerText = "What's your name?";
  nameInput.style.display = "inline";
  nameSubmitButton.style.display = "inline";
  nameSubmitButton.addEventListener("click", submitName);
}

function submitName() {
  playerName = nameInput.value.trim();
  if (playerName !== "") {
    nameInput.style.display = "none";
    nameSubmitButton.style.display = "none";
    nameInput.disabled = true;
    nextButton.style.display = "inline";
    showQuestion();
  } else {
    alert("Please enter your name.");
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  if (questionNo <= 1) {
    questionElement.innerHTML = `Hello, ${playerName}!\n Question ${questionNo}: ${currentQuestion.question}`;
  } else {
    questionElement.innerHTML = `Question ${questionNo}: ${currentQuestion.question}`;
  }

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }
  else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `${playerName}, You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
  else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
  else {
    startQuiz();
  }
});

startQuiz();