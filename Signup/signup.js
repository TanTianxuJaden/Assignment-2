let apikey = "63d663b83bc6b255ed0c43f7";

$("#add-signup-form").submit(function (e) {
    e.preventDefault();
let email = $("#form-email").val();
let password = $("#form-pw").val();

signup(email, password);
});

function signup(email,password) {
    var jsondata = {
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
  window.location.href = "../Login/login.html";
});
}