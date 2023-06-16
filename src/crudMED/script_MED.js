let select = document.querySelector("#select");
const selectValue = document.getElementById("select");


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

//Envio para API
const formServ = document.getElementById("Crud");
formServ.addEventListener("submit", (event) => {
  event.preventDefault();
  const Name = document.querySelector("#NameInput").value;
  const cpf = document.querySelector("#CpfInput").value;
  const crm = document.querySelector("#CrmInput").value;
  const DataNascimento = document.querySelector("#DataInput").value;
  const Especialidade = document.querySelector("#EspecialidadeInput").value;

  const dados = {
    Name,
    cpf,
    crm,
    DataNascimento,
    Especialidade,
  };

  fetch("http://localhost:3000/Doctor/Insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setInterval(() => {
        alert("CADASTRADO COM SUCESSO !");
        window.location.href = "../crudMED/crud_MED.html";
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
    });
});

//READ DA API:

// Função para criar a tabela com os dados dos médicos

// Requisição GET para obter os dados dos médicos da API
fetch("http://localhost:3000/Doctor")
  .then((response) => response.json())
  .then((data) => {
    // Chamar a função para criar a tabela com os dados dos médicos
    createDoctorsTable(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Função para criar a tabela com os dados dos médicos
function createDoctorsTable(doctors) {
  const table = document.createElement("table");

  // Cabeçalho da tabela
  const headerRow = document.createElement("tr");
  const headers = ["CPF", "NOME", "NASCIMENTO", "ESPECIALIDADES", "CRM"];
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  // Linhas da tabela com os dados dos médicos
  doctors.forEach((doctor) => {
    const row = document.createElement("tr");

    const cpfCell = document.createElement("td");
    cpfCell.textContent = doctor.cpf;
    row.appendChild(cpfCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = doctor.Name;
    row.appendChild(nameCell);

    const dataNascimentoCell = document.createElement("td");
    dataNascimentoCell.textContent = doctor.DataNascimento;
    row.appendChild(dataNascimentoCell);

    const especialidadeCell = document.createElement("td");
    especialidadeCell.textContent = doctor.Especialidade;
    row.appendChild(especialidadeCell);

    const crmCell = document.createElement("td");
    crmCell.textContent = doctor.crm;
    row.appendChild(crmCell);

    table.appendChild(row);
  });

  // Adicionar a tabela ao elemento com o id "dynamicTables"
  const dynamicTablesDiv = document.getElementById("dynamicTables");
  dynamicTablesDiv.appendChild(table);
}
//delete services
document.getElementById('deleteServices').addEventListener('click', async () => {
  const medName = prompt("Insira o nome do médico:"); // Nome do serviço que deseja deletar

  try {
    // Obter os serviços pelo nome
    const serviceResponse = await fetch(`http://localhost:3000/Doctor?Name=${medName}`);
    const medData = await serviceResponse.json();

    if (!medName) return alert("Sem serviços inseridos");

    if (medData.length === 0) return alert('Médico não encontrado');

    const medId = await selectService(medData); // Obter o ID do serviço selecionado

    if (!medId) return; // O usuário cancelou a seleção

    // Deletar o serviço pelo ID
    const deleteResponse = await fetch(`http://localhost:3000/Doctor/${medId}`, {
      method: 'DELETE'
    });

    if (deleteResponse.ok) {
      alert(`${medName} foi deletado com sucesso`);
      setTimeout(() => {
        window.location.reload(true);
      }, 300);
      // Faça algo adicional, se necessário
    } else {
      console.error('Falha ao deletar serviço:', deleteResponse.status);
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
});

function selectService(medData) {
  return new Promise((resolve) => {
    let selection = prompt(
      `Selecione o serviço a ser deletado:\n${medData
        .map((med, index) => `${index + 1}. ${med.Name}`)
        .join('\n')}`
    );

    if (selection === null) {
      // O usuário cancelou a seleção
      resolve(null);
      return;
    }

    selection = parseInt(selection, 10);
    if (isNaN(selection) || selection < 1 || selection > medData.length) {
      alert('Seleção inválida. Tente novamente.');
      resolve(selectService(medData));
    } else {
      const medIndex = selection - 1;
      resolve(medData[medIndex]._id);
    }
  });
}


document.getElementById('footerWhatsapp').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com"
})
document.getElementById('footerFacebook').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com"
})
document.getElementById('footerInstagram').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com/cmed.especialidades"
})

// validação de datas: