// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

var typed = new Typed('.typed', {
  strings: ["Front-End Developer","Java Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});
// Select the form
const contactForm = document.querySelector('#Contact form');

// Listen for form submit
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  // Get input values
  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const subject = contactForm.querySelectorAll('input[type="text"]')[1].value.trim(); // second text input
  const message = contactForm.querySelector('textarea').value.trim();

  // Validation
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields!');
    return;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email!');
    return;
  }

  // Success message
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Reset form
  contactForm.reset();
});
