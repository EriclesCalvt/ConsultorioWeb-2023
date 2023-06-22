const isAuthenticated = document.cookie
.split("; ")
.find((row) => row.startsWith("token.auth="))
?.split("=")[1];

if (!isAuthenticated) window.location.replace("../loginPage/index.html");



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

const cpfInput = document.getElementById('cpf');
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
});


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


// Função para buscar os dados da API
fetch("http://localhost:3000/Products")
  .then((response) => response.json())
  .then((data) => {
    // Chamar a função para criar a tabela com os dados dos produtos
    createProductsTable(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Função para criar a tabela com os dados dos produtos
function createProductsTable(products) {
  const table = document.createElement("table");
  table.classList.add("table");

  // Cabeçalho da tabela
  const headerRow = document.createElement("tr");
  const headers = [
    "CPF",
    "RG",
    "NASC",
    "NOME",
    "Nº CASA",
    "RUA",
    "NOME BAIRRO",
    "CIDADE",
    "CEP",
    "TELEFONE",
    "CONSULTA",
  ];
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  // Linhas da tabela com os dados dos produtos
  products.forEach((product) => {
    const row = document.createElement("tr");

    const cpfCell = document.createElement("td");
    cpfCell.textContent = product.Cpf;
    row.appendChild(cpfCell);

    const rgCell = document.createElement("td");
    rgCell.textContent = product.Rg;
    row.appendChild(rgCell);

    const dataNascimentoCell = document.createElement("td");
    dataNascimentoCell.textContent = product.Nascimento;
    row.appendChild(dataNascimentoCell);

    const nomeCell = document.createElement("td");
    nomeCell.textContent = product.NomeProduct;
    row.appendChild(nomeCell);

    const numeroCasaCell = document.createElement("td");
    numeroCasaCell.textContent = product.NumeroCasa;
    row.appendChild(numeroCasaCell);

    const ruaCell = document.createElement("td");
    ruaCell.textContent = product.Rua;
    row.appendChild(ruaCell);

    const bairroCell = document.createElement("td");
    bairroCell.textContent = product.Bairro;
    row.appendChild(bairroCell);

    const cidadeCell = document.createElement("td");
    cidadeCell.textContent = product.Cidade;
    row.appendChild(cidadeCell);

    const cepCell = document.createElement("td");
    cepCell.textContent = product.Cep;
    row.appendChild(cepCell);

    const telefoneCell = document.createElement("td");
    telefoneCell.textContent = product.Telefone;
    row.appendChild(telefoneCell);

    const consultaCell = document.createElement("td");
    consultaCell.textContent = product.Consulta;
    row.appendChild(consultaCell);

    table.appendChild(row);
  });


  // Adicionar a tabela ao elemento com o id "dynamicTables"
  const dynamicTablesDiv = document.getElementById("dynamicTables");
  dynamicTablesDiv.appendChild(table);
}




//delete services
document.getElementById('deleteServices').addEventListener('click', async () => {
  const pacName = prompt("Insira o nome do paciente:"); // Nome do serviço que deseja deletar

  try {
    // Obter os serviços pelo nome
    const serviceResponse = await fetch(`http://localhost:3000/Products?NomeProduct=${pacName}`);
    const pacData = await serviceResponse.json();

    if (!pacName) return alert("Sem pacientes inseridos");

    if (pacData.length === 0) return alert('Paciente não encontrado');

    const pacId = await selectService(pacData); // Obter o ID do serviço selecionado

    if (!pacId) return; // O usuário cancelou a seleção

    // Deletar o serviço pelo ID
    const deleteResponse = await fetch(`http://localhost:3000/Products/${pacId}`, {
      method: 'DELETE'
    });

    if (deleteResponse.ok) {
      alert(`${pacName} foi deletado com sucesso`);
      setTimeout(() => {
        window.location.reload(true);
      }, 300);
      // Faça algo adicional, se necessário
    } else {
      console.error('Falha ao deletar paciente:', deleteResponse.status);
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
});

function selectService(pacData) {
  return new Promise((resolve) => {
    let selection = prompt(
      `Selecione o serviço a ser deletado:\n${pacData
        .map((pac, index) => `${index + 1}. ${pac.NomeProduct}`)
        .join('\n')}`
    );

    if (selection === null) {
      // O usuário cancelou a seleção
      resolve(null);
      return;
    }

    selection = parseInt(selection, 10);
    if (isNaN(selection) || selection < 1 || selection > pacData.length) {
      alert('Seleção inválida. Tente novamente.');
      resolve(selectService(pacData));
    } else {
      const pacIndex = selection - 1;
      resolve(pacData[pacIndex]._id);
    }
  });
}


document.getElementById("updateServices").addEventListener("click", () => {
  window.location.href = "../Configuracao/alterarDados/index.html"
})

document.getElementById('footerWhatsapp').addEventListener('click', ()=> {
  window.location.href = "https://wa.link/alopsy"
})
document.getElementById('footerFacebook').addEventListener('click', ()=> {
  window.location.href = "https://www.facebook.com/profile.php?id=100090094286048"
})
document.getElementById('footerInstagram').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com/cmed.especialidades"
})
