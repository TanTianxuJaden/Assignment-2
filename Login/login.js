let apikey = "63d663b83bc6b255ed0c43f7";


$("#login").submit(function (e) {
    e.preventDefault();
let email = $("#login_email").val();
let password = $("#login_password").val();
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
    var loggedin = false;
    for (var i = 0; i < response.length; i++) {
        if (response[i].email == email && response[i].password === password) {
            loggedin = true;
            $("#submit_login").html(
                `<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_sjcbakkb.json">`
            );
            sessionStorage.setItem("Login", JSON.stringify(response[i]));
            console.log(sessionStorage.getItem("Login"));
            window.location.href = "../index.html"
        }
    }
    if (loggedin === false) {
        alert("Invalid name or password");
        $("#submit_login").html(
            `<button type="submit" class="btn btn-primary">Log In</button>`
        )
    }
  });
});



  