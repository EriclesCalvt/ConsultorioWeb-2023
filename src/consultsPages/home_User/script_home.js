const isAuthenticated = document.cookie // Verificando se o cookie de autenticação existe
  .split("; ")
  .find((row) => row.startsWith("token.auth="))
  ?.split("=")[1];

if (!isAuthenticated) window.location.replace = "../../loginPage/index.html"

const urlRote$ = document.getElementById("urlRote");

urlRote$.addEventListener("click", () => {
  window.location.href = "../dados_User/dados_User.html";
});

function settings() {
  window.location.href = "../../Configuracao/alterarDados/loggout/index.html";
}
function minhaConta() {
  window.location.href = "../minhaConta/minhaConta.html";
}
function toggleMenu() {
  var menu = document.getElementById("menu-lateral");
  menu.classList.toggle("mostrar");
  if (mostrar === undefined) {
    menu.classList.toggle("mostrar");
  } else if (mostrar) {
    menu.classList.add("mostrar");
  } else {
    menu.classList.remove("mostrar");
  }
}
