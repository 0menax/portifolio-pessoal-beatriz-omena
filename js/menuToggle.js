const botao = document.querySelector('.button-menu-toggle');
const menu = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');
const saida = document.querySelector('.botaoSaida');

botao.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  overlay.classList.toggle('ativo');
  saida.classList.toggle('ativo');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('ativo');
  overlay.classList.remove('ativo');
  saida.classList.remove('ativo');
});

saida.addEventListener('click', () => {
  menu.classList.remove('ativo');
  overlay.classList.remove('ativo');
  saida.classList.remove('ativo');
});

