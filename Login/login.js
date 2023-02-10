let apikey = "63d663b83bc6b255ed0c43f7";


$("#login_form").submit(function (e) {
  e.preventDefault();
  let email = $("#login-email").val();
  let password = $("#login-pw").val();
  matchAccounts(email,password)

  $("body").append(`
<div id="lottie-overlay">
<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_VMNbpVQjTb.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px; margin-left:850px"  loop autoplay></lottie-player>
</div>
`);
});





function matchAccounts(email,password)

{
var settings = {
    async: true,
    crossDomain: true,
    url: "https://assignment2-1813.restdb.io/rest/signup",
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": apikey,
      "cache-control": "no-cache"
    }
  }


  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(email);
    console.log(password);
    var loggedin = false;
    for (var i = 0; i < response.length; i++) {
        if (response[i].email == email && response[i].password == password) {
            loggedin = true;
            $("#submit_login").html(
            );
            sessionStorage.setItem("Login", JSON.stringify(response[i]));
            console.log(sessionStorage.getItem("Login"));
            window.location.href = "../index.html"
        }
    }
    
    if (loggedin === false) {
        alert("Invalid email or password");
    }
  });
  setTimeout(function() {
    document.querySelector("lottie-player").remove();
  }, 3000);
}



  // Xerxes //