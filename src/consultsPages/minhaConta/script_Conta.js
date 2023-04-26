const url$ = document.getElementById("btn_Consult");
const urlRote$ = document.getElementById("urlRote");
const urlRote3$ = document.getElementById("button_especialidade");

url$.addEventListener("click", () => {
  window.location.href = "../../loginPage/Login.html";
});

// urlRote3$.addEventListener("click", () => {
//   window.location.href = //ADICIONAR ROTA;
// });

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // adicionar o envio dos dados para o localStorage

  window.location.href = "../especialidades_User/especialidades.html";
});

function confirmation() {
  window.location.href = "../especialidades_User/especialidades.html";
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
