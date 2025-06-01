document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("statusMessage");

  if (name === "" || email === "" || message === "") {
    status.style.color = "red";
    status.textContent = "Please fill in all fields!";
    return;
  }

  // Simulate form submission
  status.style.color = "green";
  status.textContent = "Message sent successfully! ✅";

  // Clear the form
  document.getElementById("contactForm").reset();
});
