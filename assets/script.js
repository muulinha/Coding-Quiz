// adding timer
var timerEl = document.getElementById("timer");

var secondsLeft = 60;

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


startButton.addEventListener("click", function() {
  page1.remove();
  setTime();
});







// [
//     {
//       title: 'Commonly used data types DO NOT include:',
//       choices: ['strings', 'booleans', 'alerts', 'numbers'],
//       answer: 'alerts',
//     },
//     {
//         title: 'The condition in an if/else statement is encolosed within ____.',
//         choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
//         answer: 'parentheses',
//     }
//     {
//         title: 'Arrays in JavaScript can be used to store _____.',
//         choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
//         answer: 'all of the above',
//     }
//     {
//         title: 'String values must be enclosed within ______ when being assigned to variables.',
//         choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
//         answer: 'quotes',
//     }
//     {
//         title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
//         choices: ['JavaScript', 'terminal/bash', 'for loops', 'console log'],
//         answer: 'console log',
//     }
//   ]

















