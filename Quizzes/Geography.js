function checkAnswers() {
    var score = 0;
    var answer1 = document.querySelector('input[name="g1"]:checked').value;
    if (answer1 === "Paris") {
      score += 1;
    }
    var answer2 = document.querySelector('input[name="g2"]:checked').value;
    if (answer2 === "Indian Ocean") {
      score += 1;
    }
    var answer3 = document.querySelector('input[name="g3"]:checked').value;
    if (answer3 === "Canada") {
      score += 1;
    }
    var answer4 = document.querySelector('input[name="g4"]:checked').value;
    if (answer4 === "Canberra") {
      score += 1;
    }
    var answer5 = document.querySelector('input[name="g5"]:checked').value;
    if (answer5 === "Sahara Desert") {
      score += 1;
    }
    var answer6 = document.querySelector('input[name="g6"]:checked').value;
    if (answer6 === "Mississippi River") {
      score += 1;
    }
    var answer7 = document.querySelector('input[name="g7"]:checked').value;
    if (answer7 === "Brasília") {
      score += 1;
    }
    var answer8 = document.querySelector('input[name="g8"]:checked').value;
    if (answer8 === "Beijing") {
      score += 1;
    }
    var answer9 = document.querySelector('input[name="g9"]:checked').value;
    if (answer9 === "Mexico") {
      score += 1;
    }
    var answer10 = document.querySelector('input[name="g10"]:checked').value;
    if (answer10 === "Mount Everest") {
      score += 1;
    }
    document.getElementById("result").style.color="white";
    document.getElementById("result").style.fontSize="125%";
    document.getElementById("result").innerHTML = "Your total score is " + score + " out of 10.";
  }