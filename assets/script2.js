function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("user"));
  document.getElementById("savedInitials").innerHTML = lastGrade.initals
  document.getElementById("savedScores").innerHTML = lastGrade.score

}

renderMessage() 