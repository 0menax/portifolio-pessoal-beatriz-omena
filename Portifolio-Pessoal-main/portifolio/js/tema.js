const botaoTema = document.querySelector('.btn-tema');

botaoTema.addEventListener('click', function () {
    document.body.classList.toggle('tema-escuro');
    document.body.classList.toggle('tema-claro');
});