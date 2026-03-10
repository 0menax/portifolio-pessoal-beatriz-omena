const botaoTema = document.querySelector(".btn-tema");
const body = document.body;


function mudarTema(tema) {
  body.classList.remove("tema-claro", "tema-escuro");
  body.classList.add(tema);

  localStorage.setItem("tema", tema);
}


const temaSalvo = localStorage.getItem("tema");

if (temaSalvo) {
  mudarTema(temaSalvo);
} else {
  mudarTema("tema-claro");
}


botaoTema.addEventListener("click", () => {
  if (body.classList.contains("tema-claro")) {
    mudarTema("tema-escuro");
  } else {
    mudarTema("tema-claro");
  }
});