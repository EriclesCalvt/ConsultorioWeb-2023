const isAuthenticated = document.cookie // Verificando se o cookie de autenticação existe
  .split("; ")
  .find((row) => row.startsWith("token.auth="))
  ?.split("=")[1];

if (!isAuthenticated) window.location.replace = "../loginPage/index.html"


const formServ = document.getElementById('Form-Serv');
formServ.addEventListener('submit', (event) => {
  event.preventDefault();
  const Nome = document.querySelector('#nomeForm').value
  const Horarios = document.querySelector('#horarioForm').value
  const Data = document.querySelector('#dataForm').value
  const NomePaciente = document.querySelector('#nomepacienteForm').value

  const dados = {
    Nome,
    Horarios,
    Data,
    NomePaciente,
  }

  fetch('http://localhost:3000/Services/Insert', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    setInterval(()=> {
      alert("CADASTRADO COM SUCESSO !")
      window.location.href = "../crudSERV/crud_SERV.html";
    }, 2000)
  })
  .catch((error) => {
    console.log(error)
  })
})

function valorSERV(value) {
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
      //window.location.href = "";
      break;
  }
}
