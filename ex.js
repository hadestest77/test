alrt("please enter user email and password and submit (just for test)");

function getUserPass(){
	        user = document.getElementById('loginForm-eMail').value;
	        password = document.getElementById('loginForm-password').value;
  			alert("Email: " + user + "\n" + "Password: " + password);
} 

document.addEventListener('DOMContentLoaded', function() {
   var btn = document.getElementById("login-submit-btn");
   btn.disabled = false;
   btn.addEventListener("click", getUserPass);
}, false);
