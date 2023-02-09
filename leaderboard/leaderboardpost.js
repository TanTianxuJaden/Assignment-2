let apikey = "63d663b83bc6b255ed0c43f7";

$("#leaderboardinputs").submit(function (e) {
  e.preventDefault();
let score = $("#form-score").val();
let subject = $("#form-subject").val();

inputs(score,subject)
});


function inputs(score,subject) {
  var jsondata = {
      score: score,
      subject: subject,
  }


var settings = {
  async: true,
  crossDomain: true,
  url: "https://assignment2-1813.restdb.io/rest/leaderboard",
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-apikey": apikey,
    "cache-control": "no-cache"
  },
  processData: false,
  data: JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
  window.location.href = "leaderboard.html";
});
}
