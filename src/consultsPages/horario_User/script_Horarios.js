const confirmationBtns = document.getElementsByClassName("confirmation");

for (let i = 0; i < confirmationBtns.length; i++) {
  confirmationBtns[i].addEventListener("click", function () {
    const ConfirmationValue = this.value;
    localStorage.setItem("Horario-Consulta", ConfirmationValue);
  });
}
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
