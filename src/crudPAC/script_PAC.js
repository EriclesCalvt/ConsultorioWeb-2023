const isAuthenticated = document.cookie // Verificando se o cookie de autenticação existe
  .split("; ")
  .find((row) => row.startsWith("token.auth="))
  ?.split("=")[1];

if (!isAuthenticated) window.location.replace = "../loginPage/index.html"



let select = document.querySelector("#select");
const selectValue = document.getElementById("select");
console.log(selectValue.value);


const formServ = document.getElementById('formPaciente');
formServ.addEventListener('submit', (event) => {
  event.preventDefault();
  const Cpf = document.querySelector('#cpf').value
  const Rg = document.querySelector('#rg').value
  const Nascimento = document.querySelector('#dataNascimento').value
  const NomeProduct = document.querySelector('#nome').value
  const NumeroCasa = document.querySelector('#numeroCasa').value
  const Rua = document.querySelector('#rua').value
  const Bairro = document.querySelector('#bairro').value
  const Cidade = document.querySelector('#cidade').value
  const Cep = document.querySelector('#cep').value
  const Telefone = document.querySelector('#telefone').value
  const Consulta = document.querySelector('#consulta').value

  const dados = {
    Cpf,
    Rg,
    Nascimento,
    NomeProduct,
    NumeroCasa,
    Rua,
    Bairro,
    Cidade,
    Cep,
    Telefone,
    Consulta,
  }

  fetch('http://localhost:3000/Products/Insert', {
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
      window.location.href = "../crudPAC/crud_PAC.html";
    }, 2000)
  })
  .catch((error) => {
    console.log(error)
  })
})


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
      //window.location.href = "";
      break;
  }
}
