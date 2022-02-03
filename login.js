const form = document.querySelector("form");
const LoginBtn = document.querySelector(".login-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Login Successfully!");

  LoginBtn.textContent = "Log Out";
});
