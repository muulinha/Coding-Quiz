// adding timer
var timerEl = document.getElementById("timer");
var questionsElement = document.querySelector('#questions');
var secondsLeft = 60;
var currentQuestionIndex = 0;
var optionsElement = document.querySelector('#options')
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft + " s";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      timerEl.textContent = "Time Over!"
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}


// adding function to "start quiz button"
var startButton = document.getElementById("startQuiz");
var page1 = document.getElementById("page1");


// startButton.addEventListener("click", function() {
//   page1.remove();
//   setTime();
// });
function startGame() {
  var startGameScreen = document.querySelector('#page1')
  startGameScreen.setAttribute('class', 'hide')

  questionsElement.removeAttribute('class')

  setTime()

  askQuestion()
}

function askQuestion() {
  var currentQuestion = questions[currentQuestionIndex]

  var questionTitle = document.querySelector('#question-name')
  questionTitle.textContent = currentQuestion.title;

  for (i = 0; i < currentQuestion.options.length; i++) {
    var option = currentQuestion.options[i]
    
    var optionsBtn = document.createElement('button');
    optionsBtn.setAttribute('value', option)

    optionsBtn.textContent = i + 1 + option

    optionsElement.appendChild(optionsBtn)
  }
}

// function for when a user clicks on a option
// hint: look for a func example that takes a user click event 
// this func will add and subtract time and display righ t or wrong feedback 
// it will increment question index
// if there are no more questions, run endGame, else rerun askQuestion

// console.log(questionsAnswers[1]);

//funct to end game 

// func to save high score 

startButton.onclick = startGame;









