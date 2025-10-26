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

// Live Preview
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.stat-label').forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const imgSrc = link.getAttribute('data-image');
    modalImg.src = imgSrc;
    modal.style.display = 'flex';
  });
});

closeBtn.onclick = function(){
  modal.style.display = 'none';
};
modal.onclick = function(e){
  if (e.target === modal){
    modal.style.display = 'none';
  }
};