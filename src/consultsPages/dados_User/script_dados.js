const urlRote$ = document.getElementById("urlRote");
document.querySelector("#CPF").addEventListener("click", () => {
  
})

document.querySelector(".form-user").addEventListener("submit", (e) => {
  // adicionar o envio dos dados para o localStorage
  e.preventDefault();
  const NameInput = document.getElementById("Nome");
  GetName = localStorage.getItem("Nome");
  localStorage.setItem("Nome", NameInput.value);
  NameInput.value = "";

  const RgInput = document.getElementById("RG");
  GetRg = localStorage.getItem("RG");
  localStorage.setItem("RG", RgInput.value);
  RgInput.value = "";

  const CpfInput = document.getElementById("CPF");
  GetCpf = localStorage.getItem("CPF");
  localStorage.setItem("CPF", CpfInput.value);
  CpfInput.value = "";

  const DataInput = document.getElementById("Data");
  localStorage.setItem("Data-Nascimento", DataInput.value);
  GetData = localStorage.getItem("Data-Nascimento");
  console.log(GetData);
  DataInput.value = "";

  //Condicional:
  const items = {
    NameInput: GetName,
    RgInput: GetRg,
    CpfInput: GetCpf,
    DataInput: GetData,
  };

  if (items == false) {
  } else {
    window.location.href = "../especialidades_User/especialidades.html";
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
