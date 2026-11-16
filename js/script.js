const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const flipCards = document.querySelectorAll(".flip-card");
flipCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("flipped");
  });
});

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

const contactForm = document.getElementById("contact-form");
const feedbackMsg = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const visitorName = document.getElementById("visitor-name").value;
  feedbackMsg.textContent = "Hello " + visitorName + "! Thank you for your message.";
  contactForm.reset();
});