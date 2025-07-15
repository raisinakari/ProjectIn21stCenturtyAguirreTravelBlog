document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const formMessage = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formMessage.textContent = "Thank you for your message! 🐾";
      form.reset();
    });
  }
});