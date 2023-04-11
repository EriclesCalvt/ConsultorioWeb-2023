let select = document.querySelector("#select");
const selectValue = document.getElementById("select");
console.log(selectValue.value);

function valorPAC(value) {
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
      window.location.href = "";
      break;
  }
}
