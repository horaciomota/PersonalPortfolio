// Obtenha as referências para o body e as sessões
const body = document.body;
const session1 = document.getElementById("session1");
const session2 = document.getElementById("session2");
const session3 = document.getElementById("session3");

console.log(session1);
// Defina as cores iniciais e finais
const corInicial = "#ddd";
const corFinalSession1 = "#f2f2f2";
const corFinalSession2 = "#ffffff";

// Defina as posições de rolagem que acionarão as mudanças de cor
const posicaoRolagemSession1 = session1.offsetTop + session1.offsetHeight * 0.7;
const posicaoRolagemSession2 = session2.offsetTop + session2.offsetHeight * 0.7;
const posicaoRolagemSession3 = session3.offsetTop + session3.offsetHeight * 0.7;

// Adicione um ouvinte de evento para o evento de rolagem na janela
window.addEventListener("scroll", function () {
  // Verifique se a posição de rolagem da sessão 3 foi alcançada ou ultrapassada
  if (window.scrollY >= posicaoRolagemSession3) {
    // Defina a cor do corpo para a cor final da sessão 2 com uma transição de 0,5 segundos
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = corFinalSession2;
  }
  // Verifique se a posição de rolagem da sessão 2 foi alcançada ou ultrapassada
  else if (window.scrollY >= posicaoRolagemSession2) {
    // Defina a cor do corpo para a cor final da sessão 2 com uma transição de 0,5 segundos
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = corFinalSession2;
  }
  // Caso contrário, verifique se a posição de rolagem da sessão 1 foi alcançada ou ultrapassada
  else if (window.scrollY >= posicaoRolagemSession1) {
    // Defina a cor do corpo para a cor final da sessão 1 com uma transição de 0,5 segundos
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = corFinalSession1;
  } else {
    // Caso contrário, defina a cor do corpo para a cor inicial com uma transição de 0,5 segundos
    body.style.transition = "background-color 0.5s ease";
    body.style.backgroundColor = corInicial;
  }
});
