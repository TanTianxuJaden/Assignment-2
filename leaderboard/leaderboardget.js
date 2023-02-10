let apikey = "63d663b83bc6b255ed0c43f7";


$("body").append(`
<div id="lottie-overlay">
<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_VMNbpVQjTb.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px; margin-left:850px"  loop autoplay></lottie-player>
</div>
`);


var settings = {
    async: true,
    crossDomain: true,
    url: "https://assignment2-1813.restdb.io/rest/leaderboard",
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": apikey,
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    let leaderboardTable = document.getElementById("leaderboard-table");
  let tableBody = leaderboardTable.getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";
  response.forEach(function(item) {
    let tr = document.createElement("tr");
    let scoreTd = document.createElement("td");
    scoreTd.innerText = item.score;
    tr.appendChild(scoreTd);
    let subjectTd = document.createElement("td");
    subjectTd.innerText = item.subject;
    tr.appendChild(subjectTd);
    tableBody.appendChild(tr);
  });

  setTimeout(function() {
    document.querySelector("lottie-player").remove();
  }, 200);
  });

// Xerxes //