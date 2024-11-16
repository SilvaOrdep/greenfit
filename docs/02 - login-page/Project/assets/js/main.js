const form = document.querySelector('.form');
const inputdoEmail = document.getElementById('email');

function receberEvento(evento) {
  evento.preventDefault();
  if (!inputdoEmail.value) {
    alert('Por favor, preencha o campo de e-mail.');
    return;
  }

  if (!validarEmail(inputdoEmail.value)) {
    alert('Por favor, insira um e-mail válido. ex: nathan123@gmail.com');
    return;
  }
}

function validarEmail(email) {
  const regexDoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexDoEmail.test(email);
}

form.addEventListener('submit', receberEvento);
