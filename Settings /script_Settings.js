const url$ = document.getElementById("btn_Consult");
const urlRote$ = document.getElementById("urlRote");

url$.addEventListener("click", () => {
  window.location.href = "../../loginPage/Login.html";
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // adicionar o envio dos dados para o localStorage

  window.location.href = "../especialidades_User/especialidades.html";
});
