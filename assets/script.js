// Setting the timer.
var timerEl = document.getElementById("timer");
var secondsLeft = 60;
// adding function to "start quiz button"
var startButton = document.getElementById("startQuiz");
// Setting the Quiz Page (questions and Options)
var questionsEl = document.querySelector('#quiz-page');
var optionsEl = document.querySelector('#options');
var currentQuestionIndex = 0;


// ___________________________________________________________
// Setting the timer.
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft + " s";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      timerEl.textContent = "Time Over!";
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}
// ___________________________________________________________



// ___________________________________________________________
function askQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var questionTitle = document.querySelector('#question-title');
  questionTitle.textContent = currentQuestion.title;

  for (i = 0; i < currentQuestion.options.length; i++) {
    var option = currentQuestion.options[i];
    
    var optionsBtn = document.createElement('button');
    optionsBtn.setAttribute('value', option)

    optionsBtn.textContent = i + 1 + option;

    optionsEl.appendChild(optionsBtn)
  }
}
// ___________________________________________________________

function clickOptions () {
  var options = document.querySelector("#options");
  
// Listen for any clicks within the options id
options.addEventListener("click", function(event) {
  var element = event.target;
  
  if (element.matches("options")) {
    
    startGame();
    if (correctAnswer === questions.answer) {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      

    } else {
      secondsLeft = secondsLeft - 10;
      askQuestion();
    }
  }
});

}
// ____________________________________________________________




// ___________________________________________________________
function startGame() {
  var startGameScreen = document.querySelector('#page1');
  startGameScreen.setAttribute('class', 'hide');

  questionsEl.removeAttribute('class', "hide");

  setTime();

  askQuestion();
  clickOptions();
}
// ____________________________________________________________

startButton.onclick = startGame;

// ____________________________________________________________



// function for when a user clicks on a option
// hint: look for a func example that takes a user click event 
// this func will add and subtract time and display righ t or wrong feedback 
// it will increment question index
// if there are no more questions, run endGame, else rerun askQuestion

// console.log(questionsAnswers[1]);

//funct to end game 

// func to save high score 




