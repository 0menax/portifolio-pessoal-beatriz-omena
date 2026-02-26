const abrir = document.getElementById('abrir');
const fechar = document.getElementById('fechar');
const modal = document.getElementById('modal');

abrir.addEventListener('click', () => {
  modal.classList.add('ativo');
});

fechar.addEventListener('click', () => {
  modal.classList.remove('ativo');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('ativo');
  }
});
