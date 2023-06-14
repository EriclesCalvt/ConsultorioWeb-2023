const isAuthenticated = document.cookie
.split("; ")
.find((row) => row.startsWith("token.auth="))
?.split("=")[1];

if (!isAuthenticated) window.location.replace("../../loginPage/index.html");



//validação de data:
var dataInput = document.getElementById("DateInput");
var dataAtual = new Date().toISOString().split("T")[0];
dataInput.setAttribute("min", dataAtual);

const confirmationBtns = document.getElementsByClassName("confirmation");

for (let i = 0; i < confirmationBtns.length; i++) {
  confirmationBtns[i].addEventListener("click", function () {
    const ConfirmationValue = this.value;
    localStorage.setItem("Horario-Consulta", ConfirmationValue);
  });
}
const confirmationButtons = document.querySelectorAll(".confirmation");

// Adicione um evento de clique (click) a cada botão
confirmationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Altere a cor de fundo do botão clicado
    button.style.backgroundColor = "#19a9dd";
  });
});
document.querySelector("#form-date").addEventListener("submit", (e) => {
  e.preventDefault();
  const DataFormInput = document.getElementById("DateInput");
  localStorage.setItem("Data-Consulta", DataFormInput.value);
  GetDataForm = localStorage.getItem("Data-Consulta");
  DataFormInput.value = "";

  //Condicional:
  const Consultas = {
    DataFormInput: GetDataForm,
  };

  if (Consultas == false) {
  } else {
    window.location.href = "../confirmation_User/confirmation.html";
  }
});
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


document.getElementById('footerWhatsapp').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com"
})
document.getElementById('footerFacebook').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com"
})
document.getElementById('footerInstagram').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com/cmed.especialidades"
})