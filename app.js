var toggle = document.getElementById("toggle");
var overlayToggle = document.getElementById("overlay");
toggle.addEventListener("click", function(){
  toggle.classList.toggle("active");
  overlayToggle.classList.toggle("open"); 
}); 
document.getElementById('uname').addEventListener("keyup", function(event) {
  var username = document.forms["Form"]["uname"].value;
  var err = document.getElementById('err');
  if (username.length < 8) {
    this.style.borderColor = "#99374f";
    err.innerHTML = "Name should be at least 6 characters";
    event.preventDefault();
  } else {
    this.style.borderColor = "#47a797";
    err.innerHTML = " ";
  }
});
document.getElementById('email').addEventListener('keyup', function() {
  var email = document.forms["Form"]["email"].value;
  if (email && /(^\w.*@\w+\.\w)/.test(email)) {
    err.innerHTML = " "
    this.style.borderColor = "#47a797";
  } else {
    err.innerHTML = "Enter valid mail "
    this.style.borderColor = "#99374f";
  }
});
document.getElementById('message').addEventListener("keyup", function() {
  var message = document.forms["Form"]["message"].value;
  var err = document.getElementById('err');
  if (message.length < 30 || message.length == " ") {
    this.style.borderColor = "#99374f";
    err.innerHTML = "Enter at least 30 letters";
    event.preventDefault();
  } else {
    this.style.borderColor = "#47a797";
    err.innerHTML = " "; 
  }
});
window.onload = function() {
	message.value ="";
};

