let apikey = "63d663b83bc6b255ed0c43f7";


$("#add-signup-form").submit(function (e) {
    e.preventDefault();
let email = $("#form-email").val();
let password = $("#form-pw").val();

$("body").append(`
<div id="lottie-overlay">
<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_VMNbpVQjTb.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px; margin-left:850px"  loop autoplay></lottie-player>
</div>
`);


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

setTimeout(function() {
  document.querySelector("lottie-player").remove();
}, 3000);
}



// Xerxes //