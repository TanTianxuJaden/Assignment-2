function checkAnswers() {
    var score = 0;
    var answer1 = document.querySelector('input[name="ck1"]:checked').value;
    if (answer1 === "Harper Lee") {
      score += 1;
    }
    var answer2 = document.querySelector('input[name="ck2"]:checked').value;
    if (answer2 === "Leonardo da Vinci") {
      score += 1;
    }
    var answer3 = document.querySelector('input[name="ck3"]:checked').value;
    if (answer3 === "Vincent van Gogh") {
      score += 1;
    }
    var answer4 = document.querySelector('input[name="ck4"]:checked').value;
    if (answer4 === "William Shakespeare") {
      score += 1;
    }
    var answer5 = document.querySelector('input[name="ck5"]:checked').value;
    if (answer5 === "J.K. Rowling") {
      score += 1;
    }
    var answer6 = document.querySelector('input[name="ck6"]:checked').value;
    if (answer6 === "Beethoven") {
      score += 1;
    }
    var answer7 = document.querySelector('input[name="ck7"]:checked').value;
    if (answer7 === "Jane Austen") {
      score += 1;
    }
    var answer8 = document.querySelector('input[name="ck8"]:checked').value;
    if (answer8 === "James Cameron") {
      score += 1;
    }
    var answer9 = document.querySelector('input[name="ck9"]:checked').value;
    if (answer9 === "F. Scott Fitzgerald") {
      score += 1;
    }
    var answer10 = document.querySelector('input[name="ck10"]:checked').value;
    if (answer10 === "Neil Armstrong") {
      score += 1;
    }
    document.getElementById("result").style.color="white";
    document.getElementById("result").style.fontSize="125%";
    document.getElementById("result").innerHTML = "Your total score is " + score + " out of 10.";
  }