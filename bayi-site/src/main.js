// Simple UI behaviors: nav toggle and non-submitting form
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('nav');
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;
  
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

// Contact form handling - only if form exists
const form = document.getElementById('contactForm');
if (form) {
  const status = form.querySelector('.form-status');
  if (status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name')?.trim();
      const phone = fd.get('phone')?.trim();
      if(!name || !phone){
        status.textContent = 'Lütfen ad ve telefon giriniz.';
        status.className = 'form-status error';
        return;
      }
      // Demo behavior: show success message but do NOT send or store data
      status.textContent = 'Gönderildi — teşekkürler! (Bu form demo amaçlıdır ve veri saklanmamaktadır.)';
      status.className = 'form-status success';
      setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 5000);
      form.reset();
    });
  }
}
