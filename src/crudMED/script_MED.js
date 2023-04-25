let select = document.querySelector("#select");
const selectValue = document.getElementById("select");
console.log(selectValue.value);

function valorMED(value) {
  switch (value) {
    case "Médicos":
      window.location.href = "../crudMED/crud_MED.html";
      break;

    case "Pacientes":
      window.location.href = "../crudPAC/crud_PAC.html";
      break;

    case "Serviços":
      window.location.href = "../crudSERV/crud_SERV.html";
      break;

    default:
      // window.location.href = "";
      break;
  }
}

//Envio a API:
const btnSalvar = document.getElementById("btn_ADICIONAR");
btnSalvar.addEventListener("click", function () {
  const medico = {
    Name: document.getElementById("NameInput").value,
    cpf: document.getElementById("CpfInput").value,
    crm: document.getElementById("CrmInput").value,
    DataNascimento: document.getElementById("DataInput").value,
    Especialidade: document.getElementById("EspecialidadeInput").value,
  };

  fetch("http://localhost:3000/doctors/Insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(medico),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
