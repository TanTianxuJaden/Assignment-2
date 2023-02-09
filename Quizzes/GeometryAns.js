function checkAnswers() {
    var score = 0;
    var answer1 = document.querySelector('input[name="gm1"]:checked').value;
    if (answer1 === "A = bh") {
      score += 1;
    }
    var answer2 = document.querySelector('input[name="gm2"]:checked').value;
    if (answer2 === "P = 4s") {
      score += 1;
    }
    var answer3 = document.querySelector('input[name="gm3"]:checked').value;
    if (answer3 === "A part of a line that has two endpoints") {
      score += 1;
    }
    var answer4 = document.querySelector('input[name="gm4"]:checked').value;
    if (answer4 === "V = πr^2h") {
      score += 1;
    }
    var answer5 = document.querySelector('input[name="gm5"]:checked').value;
    if (answer5 === "C = 2πr") {
      score += 1;
    }
    var answer6 = document.querySelector('input[name="gm6"]:checked').value;
    if (answer6 === "A line that cuts another line into two equal parts at a 90-degree angle") {
      score += 1;
    }
    var answer7 = document.querySelector('input[name="gm7"]:checked').value;
    if (answer7 === "A = πr^2") {
      score += 1;
    }
    var answer8 = document.querySelector('input[name="gm8"]:checked').value;
    if (answer8 === "A closed figure with three or more straight sides") {
      score += 1;
    }
    var answer9 = document.querySelector('input[name="gm9"]:checked').value;
    if (answer9 === "An angle that measures exactly 90 degrees") {
      score += 1;
    }
    var answer10 = document.querySelector('input[name="gm10"]:checked').value;
    if (answer10 === "V = lwh") {
      score += 1;
    }
    document.getElementById("result").style.color="white";
    document.getElementById("result").style.fontSize="125%";
    document.getElementById("result").innerHTML = "Your total score is " + score + " out of 10.";
  }