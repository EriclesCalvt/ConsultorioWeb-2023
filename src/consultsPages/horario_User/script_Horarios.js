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


// function pad(valor) {
//   return valor.toString().padStart(2, '0');
// }

// function formata(data) {
//   return `${data.getFullYear()}-${pad(data.getMonth() + 1)}-${pad(data.getDate())}`;
// }

// const campo = document.querySelector('#DateInput');

// window.addEventListener('DOMContentLoaded', function() {
//   const data = new Date(); // data de hoje
//   campo.min = formata(data);
//   campo.max = formata(data); // define a data máxima como o dia atual
// });

// campo.addEventListener('input', () => {
//   campo.setCustomValidity('');
//   campo.checkValidity();
// });

// campo.addEventListener('invalid', () => {
//   const dataDiaDeHoje = new Date(); // data de hoje
//   const dataSelecionada = new Date(campo.value); // data selecionada pelo usuário

//   const anoDiaDeHoje = dataDiaDeHoje.getFullYear();
//   const mesDiaDeHoje = dataDiaDeHoje.getMonth() + 1;
//   const diaDiaDeHoje = dataDiaDeHoje.getDate();

//   const anoSelecionado = dataSelecionada.getFullYear();
//   const mesSelecionado = dataSelecionada.getMonth() + 1;
//   const diaSelecionado = dataSelecionada.getDate();

//   // let diff = anoSelecionado - anoDiaDeHoje;
//   // if (mesSelecionado < mesDiaDeHoje || (mesSelecionado === mesDiaDeHoje && diaSelecionado < diaDiaDeHoje)) {
//   //   diff--;
//   // }

//   // if (diff < 0) {
//   //   campo.setCustomValidity('O ano inserido não é válido. Insira um ano igual ou posterior ao atual.');
//   // } else {
//   //   campo.setCustomValidity(`A data deve estar entre hoje e ${diff} anos à frente`);
//   // }
// });



document.getElementById('footerWhatsapp').addEventListener('click', ()=> {
  window.location.href = "https://wa.link/alopsy"
})
document.getElementById('footerFacebook').addEventListener('click', ()=> {
  window.location.href = "https://www.facebook.com/profile.php?id=100090094286048"
})
document.getElementById('footerInstagram').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com/cmed.especialidades"
})
