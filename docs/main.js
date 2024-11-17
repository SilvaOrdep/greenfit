const form = document.querySelector('.formsContato');
const inputdoEmail = document.querySelector('.email');
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  }
  else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// forms validation

function receberEvento(evento) {
  evento.preventDefault();
  if (!inputdoEmail.value) {
    alert('Por favor, preencha o campo de e-mail.');
    return;
  }

  if (!validarEmail(inputdoEmail.value)) {
    alert('Por favor, insira um e-mail válido. ex: pedro123@gmail.com');
    return;
  }
}

function validarEmail(email) {
  const regexDoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexDoEmail.test(email);
}

form.addEventListener('submit', receberEvento);