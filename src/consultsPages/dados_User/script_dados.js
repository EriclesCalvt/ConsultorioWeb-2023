const isAuthenticated = document.cookie
.split("; ")
.find((row) => row.startsWith("token.auth="))
?.split("=")[1];

if (!isAuthenticated) window.location.replace("../../loginPage/index.html");


const urlRote$ = document.getElementById("urlRote");
document.querySelector("#CPF").addEventListener("click", () => {
  
})


//tratamento de data:

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
    menu.clasDatasList.add("mostrar");
  } else {
    menu.classList.remove("mostrar");
  }
}

const cpfInput = document.getElementById('CPF');
cpfInput.addEventListener('input', () => {
  let cpf = cpfInput.value.replace(/\D/g, ''); // remove todos os caracteres não-numéricos
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // adiciona ponto após os primeiros 3 dígitos
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // adiciona ponto após os segundos 3 dígitos
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // adiciona hífen após os últimos 2 dígitos
  cpfInput.value = cpf;
});

const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', () => {
  let telefone = telefoneInput.value.replace(/\D/g, ''); // remove todos os caracteres não-numéricos
  telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2'); // adiciona parênteses e espaço após os primeiros 2 dígitos
  telefone = telefone.replace(/(\d{4,5})(\d)/, '$1-$2'); // adiciona hífen após o quarto ou quinto dígito
  telefoneInput.value = telefone;
});Data


var CEP = document.getElementById("CEP");
CEP.addEventListener("input", function () {
  var cep = CEP.value;
  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          
         
          document.getElementById("cidade").value = data.localidade;
         
        } else {
          
          document.getElementById("cidade").value = "";
          
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
});




document.getElementById('footerWhatsapp').addEventListener('click', ()=> {
  window.location.href = "https://wa.link/alopsy"
})
document.getElementById('footerFacebook').addEventListener('click', ()=> {
  window.location.href = "https://www.facebook.com/profile.php?id=100090094286048"
})
document.getElementById('footerInstagram').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com/cmed.especialidades"
})
