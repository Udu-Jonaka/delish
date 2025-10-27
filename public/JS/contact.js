document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  const formData = new FormData(this);

  fetch("/contact", {
    method: "POST",
    body: formData
  })
    .then(function (response) {
      return response.text();
    })
});

  // Toggle mobile menu
  function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    var toggle = document.getElementById("nav-toggle");
    navLinks.classList.toggle("active");
    toggle.classList.toggle("active");
  }

  document
    .getElementById("nav-toggle")
    .addEventListener("click", toggleMenu);

// Toggle light/dark mode
const toogleBtn = document.getElementById('theme-toogle');

const body = document.body;

toogleBtn.addEventListener('click', function() {
    body.classList.toggle('light-mode');

    const icon = toogleBtn.querySelector('i');
    if(body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else{
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});