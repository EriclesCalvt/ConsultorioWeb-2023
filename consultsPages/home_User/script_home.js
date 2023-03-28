const url$ = document.getElementById("btn_Consult");
const urlRote$ = document.getElementById("urlRote");

url$.addEventListener("click", () => {
  window.location.href = "../../loginPage/Login.html";
});

urlRote$.addEventListener("click", () => {
  window.location.href = "../dados_User/dados_User.html";
});
