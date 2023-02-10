let apikey = "63d663b83bc6b255ed0c43f7";

$("#leaderboardinputs").submit(function (e) {
  e.preventDefault();
let score = $("#form-score").val();
let subject = $("#form-subject").val();


$("body").append(`
<div id="lottie-overlay">
<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_VMNbpVQjTb.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px; margin-left:850px"  loop autoplay></lottie-player>
</div>
`);

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

setTimeout(function() {
  document.querySelector("lottie-player").remove();
}, 3000);


}

// Xerxes //