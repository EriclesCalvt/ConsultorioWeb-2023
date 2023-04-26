const urlRote$ = document.getElementById("urlRote");

urlRote$.addEventListener("click", () => {
  window.location.href = "../dados_User/dados_User.html";
});

function settings() {
  window.location.href = "../../Configuracao/index.html";
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
