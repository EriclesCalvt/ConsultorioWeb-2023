const url$ = document.getElementById("btn_Consult");
const buttons$ = document.getElementsByClassName("especialitys");

url$.addEventListener("click", () => {
  window.location.href = "../../loginPage/Login.html";
});

// document
//   .getElementsByClassName("especialitys")
//   .addEventListener("click", () => {
//     window.location.href = "../professional_User/professional_User.html";
//   });

function especialitys() {
  window.location.href = "../professional_User/professional_User.html";
}
