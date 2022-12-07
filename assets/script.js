//startButton QuerySelector

var startButton = document.querySelector(".startButton");
var timerEl = document.querySelector(".timerCount");
var generateQuestion = document.querySelector(".generateQuestion");
var choicesEl = document.querySelector("#choices");
var questionIndex = 0;
var startEl = document.querySelector("#start");
var quizzEl = document.querySelector("#quizz");
var endEl = document.querySelector("#end");
var submitEl = document.querySelector("#submit");
var scoreCountEl = document.querySelector("#scoreCount");
var highscoreBtn = document.querySelector("#highScores");
var listEl = document.querySelector("#list");
var goBackBtn = document.querySelector("#goback-btn")

var isWin = false;
var timer;
var timerCount;

//Question Arrays

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if/else statement is enclosed within ____ .",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "curly brackets",
  },
  {
    title: "Arrays in JavaScript can be used to store ____. ",
    choices: ["numbers and strings","other arrays","booleans","all of the above"],
    answer: "all of the above",
  },
  {
    title:"String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "curly brackets",
  },
  {
    title:"A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  }
];




// Start button ________________________________________________________________
startButton.addEventListener("click", startQuizz);
// Start button ________________________________________________________________


// Highscore button ____________________________________________________________
highscoreBtn.addEventListener("click", function (event) {
  startEl.classList.add("hide");
  event.preventDefault;
  quizzEl.classList.add("hide");
  endEl.classList.add("hide");
  timerEl.classList.add("hide");
  scoreCountEl.classList.remove("hide");
  event.preventDefault();
  saveLastScore();
  renderMessage();
});
// Highscore button ____________________________________________________________


// Start Quiz Function__________Start Timer and RenderQuestions_________________
function startQuizz() {
  isWin = false;
  startEl.classList.add("hide");
  quizzEl.classList.remove("hide");
  scoreCountEl.classList.remove("hide");
  timerCount = 100;
  startTimer();
  renderQuestions();
};
// Start Quiz Function__________Start Timer and RenderQuestions_________________


// Timer function_______________________________________________________________
function startTimer() {
  clearInterval(timer)
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount + " s.";

    if (timerCount === 0) {
      clearInterval(timer);
      winGame();
    }
  }, 1000);
};
// Timer function ends_______________________________________________________


// Ask Questions with the options function _______________________________
function renderQuestions() {
  scoreCountEl.classList.add("hide");

  var questionsTitle = questions[questionIndex].title;

  var titleEl = document.getElementById("questions");
  titleEl.textContent = questionsTitle;

  //render question choicees
  for (i = 0; i < questions[questionIndex].choices.length; i++) {
    var buttonEl = document.getElementById("button" + (i + 1));
    buttonEl.textContent = questions[questionIndex].choices[i];
    // if clicked , next question text plus choices appears
    buttonEl.addEventListener("click", checkAnswer);
  }};
// Ask Questions with the options function _______________________________


// Checking correct Answers function __looping with the Ask Question Function___
function checkAnswer(event) {
  var userChoice = event.target.textContent;
  if (userChoice === questions[questionIndex].answer) {
    var correctMessage = document.createElement("p");
    correctMessage.textContent = "Correct answer!";
    document.getElementById("choices").appendChild(correctMessage);
    correctMessage.setAttribute("id", "correctMessage");
    // Message disapears __
    setTimeout(() => {
      document.getElementById("choices").removeChild(correctMessage);
    }, 700);
    } else {
    var wrongMessage = document.createElement("p");
    wrongMessage.textContent = "Wrong answer!";
    document.getElementById("choices").appendChild(wrongMessage);
    wrongMessage.setAttribute("id", "wrongMessage");
    // Message disapears __
       setTimeout(() => {
        document.getElementById("choices").removeChild(wrongMessage);
      }, 700);
    timerCount -= 10;
  }
  questionIndex = questionIndex + 1;
  if (questions.length > questionIndex) {
    renderQuestions();
  } else {
    clearInterval(timer);
    winGame();
  }
};
// Checking correct Answers function __looping with the Ask Question Function___


// All DONE page function ______________________________________________________
function winGame() {
  var scoreEl = document.getElementById("score");
  scoreEl.textContent = "Your final score is " +timerCount + ".";
  quizzEl.classList.add("hide");
  endEl.classList.remove("hide");
  timerEl.classList.add("hide");
  scoreCountEl.classList.add("hide");
}
// All DONE page function ______________________________________________________


// Submit button _______________________________________________________________
submitEl.addEventListener("click", function (event) {
  quizzEl.classList.add("hide");
  endEl.classList.add("hide");
  timerEl.classList.add("hide");
  scoreCountEl.classList.remove("hide");
  event.preventDefault();
  saveLastScore();
  renderMessage();
});
// Submit button _______________________________________________________________


// Storing initials and score __________________________________________________
function saveLastScore() {

  var initalsInput = document.querySelector("#initials");
  if (initalsInput == "") {
    alert("Initials must be filled out.");
    return false;
  }
  initalsInput
  var user = {
    initals: initalsInput.value,
    score: timerCount,
    };
  localStorage.setItem("user", JSON.stringify(user));
};
// Storing initials and score __________________________________________________


// Decripting initials and score and printing __________________________________
function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("user"));
    
  if (lastGrade !== null) {
      document.getElementById("savedInitials").innerHTML = lastGrade.initals;
      document.getElementById("savedScores").innerHTML = lastGrade.score + " points";
      lists = lastGrade;
  } else {
    return;
  };
  renderLists();
};
// Decripting initials and score and printing __________________________________


// Creating list of highscores (dont think it's working) _______________________
function renderLists() {
  listEl.innerHTML = "";

  var p = document.createElement("p");
  p.setAttribute("data-index, i");

  var button = document.createElement("button");
  button.textContent = "remove";

  p.appendChild(button);
  todoList.appendChild(p);
};
// Creating list of highscores (dont think it's working) _______________________

// Go back buntton _____________________________________________________________
goBackBtn.addEventListener("click", function (event) {
  event.preventDefault;
  startEl.classList.remove("hide");
  quizzEl.classList.add("hide");
  endEl.classList.add("hide");
  timerEl.classList.add("hide");
  scoreCountEl.classList.add("hide");
  timerCount = 100;
  questionIndex = 0
  startTimer();
  renderQuestions();
});
// Go back buntton _____________________________________________________________


function init() {
  saveLastScore();
}
init();


