
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

  // carousel
          const track = document.getElementById('carouselTrack');
        const cards = document.querySelectorAll('.card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('carouselDots');
        
        let currentIndex = 0;
        let autoScrollInterval;
        const autoScrollDelay = 15000;

        // Create dots
        cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth;
            const gap = 30;
            const offset = currentIndex * (cardWidth + gap);
            
            track.style.transform = `translateX(calc(50% - ${offset}px - ${cardWidth / 2}px))`;

            // Update card states
            cards.forEach((card, index) => {
                card.classList.remove('active', 'prev', 'next');
                
                if (index === currentIndex) {
                    card.classList.add('active');
                } else if (index === currentIndex - 1) {
                    card.classList.add('prev');
                } else if (index === currentIndex + 1) {
                    card.classList.add('next');
                }
            });

            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
            resetAutoScroll();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateCarousel();
        }

        function startAutoScroll() {
            autoScrollInterval = setInterval(nextSlide, autoScrollDelay);
        }

        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }

        function resetAutoScroll() {
            stopAutoScroll();
            startAutoScroll();
        }

        // Event listeners
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoScroll();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoScroll();
        });

        // Pause on hover
        track.addEventListener('mouseenter', stopAutoScroll);
        track.addEventListener('mouseleave', startAutoScroll);

        // Handle window resize
        window.addEventListener('resize', updateCarousel);

        // Initialize
        updateCarousel();
        startAutoScroll();
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