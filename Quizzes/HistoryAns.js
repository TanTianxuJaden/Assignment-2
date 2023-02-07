function checkAnswers() {
    var score = 0;
    var answer1 = document.querySelector('input[name="answer1"]:checked').value;
    if (answer1 === "Paris") {
      score += 1;
    }
    var answer2 = document.querySelector('input[name="answer2"]:checked').value;
    if (answer2 === "Yen") {
      score += 1;
    }
    document.getElementById("result").innerHTML = "Your total score is " + score + " out of 2.";
  }