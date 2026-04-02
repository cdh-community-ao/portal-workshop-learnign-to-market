//importando icone para usar como imagens do participantes
import iconeCdh from '../img/icone-cdh.png';


const participantes = {
  convidados: [
    { nome: "Maria Chimuco", area: "Convidada" },
    { nome: "Gracieth Dias", area: "Convidada" },
    { nome: "Edson Chimuco", area: "Convidada" },
    { nome: "Florindo Paciência", area: "Convidada" }
  ],
  reservas:[
  { nome: "Metulina Vasco", area: "Reserva" },
  { nome: "Miguel Manuel", area: "Reserva" },
  { nome: "Cesaltina Magalhães", area: "Reserva" },
  { nome: "Ilídio Teixeira", area: "Reserva" },
  { nome: "Stalony Eduardo", area: "Reserva" },
  { nome: "Amélia Adelino", area: "Reserva" },
  { nome: "Belino Alpedate", area: "Reserva" },
  { nome: "Jacinto Afonso", area: "Reserva" },
  { nome: "Upale Mucanda", area: "Reserva" },
  { nome: "Abel Domingos", area: "Reserva" },
  { nome: "Paulino Wongo", area: "Reserva" },
  { nome: "Fernando Braz", area: "Reserva" },
  { nome: "Sóstenes de Almeida", area: "Reserva" },
  { nome: "José Tati", area: "Reserva" },
  { nome: "Hermenegildo André", area: "Reserva" },
  { nome: "Mário Redol", area: "Reserva" },
  { nome: "Joana Muachissende", area: "Reserva" },
  { nome: "Zacarias Bernardo", area: "Reserva" },
  { nome: "Sara Carlos", area: "Reserva" },
  { nome: "Ester Chilombo", area: "Reserva" },
  { nome: "Artur Culivela", area: "Reserva" },
  { nome: "Albertina Segunda", area: "Reserva" }
],
  instituicoes: {
    inst1: [
      { nome: "Alexandre Jamba", area: "Estudante" },
      { nome: "Francisco Costa", area: "Estudante" },
      { nome: "Madalena Mungongo", area: "Estudante" },
      { nome: "Samuel Epalanga", area: "Estudante" },
      { nome: "Edlasia Kaunda", area: "Estudante" },
      { nome: "José Sambundo", area: "Estudante" },
      { nome: "Delfina Júlio", area: "Estudante" },
      { nome: "Bernadeth Dumbo", area: "Estudante" },
      { nome: "Manuel Cardoso", area: "Estudante" },
      { nome: "Jenilza Luís", area: "Estudante" },
      { nome: "Edmilson Simões", area: "Estudante" },
      { nome: "Mônica Mário", area: "Estudante" },
      { nome: "Domingos Sandingui", area: "Estudante" },
      { nome: "José Júlio", area: "Estudante" },
      { nome: "Jenerosa João", area: "Estudante" },
      { nome: "Gabriel Sicato", area: "Estudante" },
      { nome: "Costantino Essuvi", area: "Estudante" },
      { nome: "António David", area: "Estudante" },
      { nome: "Celina Samandele", area: "Estudante" },
      { nome: "Justa Domingos", area: "Estudante" },
      { nome: "Abílio Celestino", area: "Estudante" },
      { nome: "Amélia de Jesus", area: "Estudante" },
      { nome: "Natália Chingueta", area: "Estudante" },
      { nome: "Rosalina Soma", area: "Estudante" },
      { nome: "António Sevambi", area: "Estudante" },
      { nome: "José Ch Epalanga", area: "Estudante" },
      { nome: "Anacleto Kapusso", area: "Estudante" },
      { nome: "Herculano Cinco", area: "Estudante" },
      { nome: "Adelaide Eianga", area: "Estudante" },
      { nome: "Isabel Adriano", area: "Estudante" }
],
    inst2: [
      { nome: "Alberto de Sousa", area: "Estudante" },
      { nome: "Aldemir Brito", area: "Estudante" },
      { nome: "Almir Chipiquita", area: "Estudante" },
      { nome: "Angélica Fela", area: "Estudante" },
      { nome: "Aurélio Ernesto", area: "Estudante" },
      { nome: "Bernardo Luís", area: "Estudante" },
      { nome: "Celson Banan", area: "Estudante" },
      { nome: "Cilisio Catombela", area: "Estudante" },
      { nome: "Constantino Gunza", area: "Estudante" },
      { nome: "Edgar Franco", area: "Estudante" },
      { nome: "Eduardo Roçada", area: "Estudante" },
      { nome: "Euclides Canhama", area: "Estudante" },
      { nome: "Eva Gomes", area: "Estudante" },
      { nome: "Faustino Malengue", area: "Estudante" },
      { nome: "Fernando Apolinário", area: "Estudante" },
      { nome: "Fernando Catombela", area: "Estudante" },
      { nome: "Gerônimo Manico", area: "Estudante" },
      { nome: "Invandro Porto Alegre", area: "Estudante" },
      { nome: "João Alberto", area: "Estudante" },
      { nome: "Kerem Mateus", area: "Estudante" },
      { nome: "Ladislau", area: "Estudante" },
      { nome: "Leusio Aguiar", area: "Estudante" },
      { nome: "Ludmira Licueno", area: "Estudante" },
      { nome: "Ludsilson Miranda", area: "Estudante" },
      { nome: "Luís Silva", area: "Estudante" },
      { nome: "Maria Luísa", area: "Estudante" },
      { nome: "Nelfláviane Novais", area: "Estudante" },
      { nome: "Violeta Vidro", area: "Estudante" }
],
    inst3: [
      { nome: "André António", area: "Docente" },
      { nome: "Ângelo Ângelo", area: "Docente" },
      { nome: "Daniel Castowe", area: "Docente" },
      { nome: "Estover Chilala", area: "Docente" },
      { nome: "Evaristo Moises", area: "Docente" },
      { nome: "Fidel Poutou", area: "Docente" },
      { nome: "Francisco Tchimiku", area: "Docente" },
      { nome: "João Brito Capitano", area: "Docente" },
      { nome: "José Braz", area: "Docente" }
]
  }
};

let listaAtual = "convidados";
let instituicaoAtual = null;

/* Render */
function render(lista) {
  const grid = document.getElementById("grid-elementos");
  grid.innerHTML = "";

  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${iconeCdh}">
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

//Seleciona o botão da lista e disponibiliza a lista
document.querySelectorAll(".btn-lista").forEach(button => {
  button.addEventListener("click", (event) => {
    const tipo = event.target.getAttribute("data-tipo");
    trocarLista(tipo, event);
  });
});


// Seleciona todos os botões de instituição e adiciona o evento de clique
document.querySelectorAll(".btn-inst").forEach(button => {
  button.addEventListener("click", (event) => {
    const inst = event.target.getAttribute("data-inst");
    filtrarInstituicao(inst);
  });
});
