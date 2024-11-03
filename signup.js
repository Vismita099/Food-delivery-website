document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");
    if (password === confirmPassword) {
      message.style.color = "green";
      message.textContent = "Passwords match!";
      window.location.href = "login.html";
    } else {
      message.style.color = "red";
      message.textContent = "Passwords do not match!";
    }
  });
