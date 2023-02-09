let apikey = "63d663b83bc6b255ed0c43f7";

$("#submit_signup").submit(function (e) {
    e.preventDefault();
let name = $("#signup_name").val();
let email = $("#signup_email").val();
let password = $("#signup_password").val();

signup(name, email, password);
});

function signup(name,email,password) {
    var jsondata = {
        name: name,
        email: email,
        password: password,
        
    }
    

var settings = {
  async: true,
  crossDomain: true,
  url: "https://assignment2-1813.restdb.io/rest/signup",
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
  window.location.href = "login.html";
});
}