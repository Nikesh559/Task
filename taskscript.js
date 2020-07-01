let check = document.getElementById("rememberMe");
let emailIn = document.getElementById("email");
let pass  = document.getElementById("password");
if (localStorage.checkbox && localStorage.checkbox !== "") {
  check.setAttribute("checked", "checked");
  emailIn.value = localStorage.username;
  pass.value = localStorage.password;
} else {
  check.removeAttribute("checked");
  emailIn.value = "";
  pass.value="";
}

function lsRememberMe() {
  if (check.checked && emailIn.value !== "") {
    localStorage.username = emailIn.value;
    localStorage.password = pass.value;
    localStorage.checkbox = check.value;
  } else {
    localStorage.username = "";
    localStorage.password = "";
    localStorage.checkbox = "";
  }
}