const participantes = {
  convidados: [
    { nome: "João Silva", area: "Dev" },
    { nome: "Ana Costa", area: "Designer" }
  ],
  reservas: [
    { nome: "Carlos Mendes", area: "Redes" },
    { nome: "Paula Gomes", area: "Suporte" }
  ],
  instituicoes: {
    inst1: [
      { nome: "Empresa A - Pedro", area: "Gestor" }
    ],
    inst2: [
      { nome: "Empresa B - Marta", area: "Marketing" }
    ],
    inst3: [
      { nome: "Universidade C - Luís", area: "Professor" }
    ]
  }
};

let listaAtual = "convidados";
let instituicaoAtual = null;

/* Render */
function render(lista) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="https://via.placeholder.com/150">
      <div class="info">
        <h4>${p.nome}</h4>
        <p>${p.area}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* Trocar lista */
function trocarLista(tipo, event) {
  listaAtual = tipo;
  instituicaoAtual = null;

  document.querySelectorAll(".listas button").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  document.getElementById("subInstituicoes")
    .classList.toggle("hidden", tipo !== "instituicoes");

  if (tipo === "instituicoes") {
    render([]);
  } else {
    render(participantes[tipo]);
  }
}

/* Filtrar instituição */
function filtrarInstituicao(inst) {
  instituicaoAtual = inst;
  render(participantes.instituicoes[inst]);
}

/* Pesquisa */
document.getElementById("search").addEventListener("input", function () {
  const termo = this.value.toLowerCase();
  let lista = [];

  if (listaAtual === "instituicoes" && instituicaoAtual) {
    lista = participantes.instituicoes[instituicaoAtual];
  } else if (listaAtual !== "instituicoes") {
    lista = participantes[listaAtual];
  }

  const filtrados = lista.filter(p =>
    p.nome.toLowerCase().includes(termo)
  );

  render(filtrados);
});

/* Iniciar */
render(participantes.convidados);