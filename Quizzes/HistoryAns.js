function checkAnswers() {
    var score = 0;
    var answer1 = document.querySelector('input[name="history1"]:checked').value;
    if (answer1 === "Paris") {
      score += 1;
    }
    var answer2 = document.querySelector('input[name="history2"]:checked').value;
    if (answer2 === "Yen") {
      score += 1;
    }
    var answer3 = document.querySelector('input[name="history3"]:checked').value;
    if (answer3 === "George Washington") {
      score += 1;
    }
    var answer4 = document.querySelector('input[name="history4"]:checked').value;
    if (answer4 === "1939-1945") {
      score += 1;
    }
    var answer5 = document.querySelector('input[name="history5"]:checked').value;
    if (answer5 === "General & Statesman") {
      score += 1;
    }
    var answer6 = document.querySelector('input[name="history6"]:checked').value;
    if (answer6 === "Columbus") {
      score += 1;
    }
    var answer7 = document.querySelector('input[name="history7"]:checked').value;
    if (answer7 === "Monk & Reformation") {
      score += 1;
    }
    var answer8 = document.querySelector('input[name="history8"]:checked').value;
    if (answer8 === "A. 1789-1799") {
      score += 1;
    }
    var answer9 = document.querySelector('input[name="history9"]:checked').value;
    if (answer9 === "1861-1865, US vs. CSA") {
      score += 1;
    }
    var answer10 = document.querySelector('input[name="history10"]:checked').value;
    if (answer10 === "Artist & Scientist") {
      score += 1;
    }
    document.getElementById("result").innerHTML = "Your total score is " + score + " out of 10.";
  }






























