const url$ = document.getElementById("btn_Consult");
const urlRote$ = document.getElementById("urlRote");

url$.addEventListener("click", () => {
  window.location.href = "../../loginPage/Login.html";
});

document.querySelector('.form-user').addEventListener('submit', (e) => {  
  // adicionar o envio dos dados para o localStorage
  e.preventDefault()
  const NameInput = document.getElementById("Nome");
  GetName = localStorage.getItem("Nome");
  localStorage.setItem("Nome", NameInput.value);
  NameInput.value = ""

  const RgInput = document.getElementById("RG");
  GetRg = localStorage.getItem("RG");
  localStorage.setItem("RG", RgInput.value);
  RgInput.value = ""
  
  const CpfInput = document.getElementById("CPF");
  GetCpf = localStorage.getItem("CPF");
  localStorage.setItem("CPF", CpfInput.value);
  CpfInput.value = ""

  const DataInput = document.getElementById("Data");
  localStorage.setItem("Data-Nascimento", DataInput.value);
  GetData = localStorage.getItem("Data-Nascimento");
  console.log(GetData)
  DataInput.value = ""

  //Condicional:
  const items = {
    NameInput : GetName,
    RgInput : GetRg,
    CpfInput : GetCpf,
    DataInput : GetData,
  };

  if(items == false){
  }else{
    window.location.href = "../especialidades_User/especialidades.html";
  }



})