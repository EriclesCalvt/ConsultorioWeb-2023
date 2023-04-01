const url$ = document.getElementById("btn_Consult");
const urlRote$ = document.getElementById("urlRote");

url$.addEventListener("click", () => {
  window.location.href = "../../loginPage/Login.html";
});

urlRote$.addEventListener("click", () => {
  window.location.href = "../dados_User/dados_User.html";
});

function settings() {
  window.location.href = "../../Settings /Settings.html";
}
function minhaConta() {
  window.location.href = "../minhaConta/minhaConta.html";
}
