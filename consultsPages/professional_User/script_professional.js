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

function run() {
  window.location.href = "../horario_User/horarios_User.html";
}
