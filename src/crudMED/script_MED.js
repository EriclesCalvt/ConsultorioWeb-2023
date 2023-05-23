let select = document.querySelector("#select");
const selectValue = document.getElementById("select");

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

const formServ = document.getElementById('Crud');
formServ.addEventListener('submit', (event) => {
  event.preventDefault();
  const Name = document.querySelector('#NameInput').value
  const cpf = document.querySelector('#CpfInput').value
  const crm = document.querySelector('#CrmInput').value
  const DataNascimento = document.querySelector('#DataInput').value
  const Especialidade = document.querySelector('#EspecialidadeInput').value

  const dados = {
    Name,
    cpf,
    crm,
    DataNascimento,
    Especialidade,
  }

  fetch('http://localhost:3000/Doctor/Insert', {
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
      window.location.href = "../crudMED/crud_MED.html";
    }, 2000)
  })
  .catch((error) => {
    console.log(error)
  })
})
