const isAuthenticated = document.cookie
.split("; ")
.find((row) => row.startsWith("token.auth="))
?.split("=")[1];

if (!isAuthenticated) window.location.replace("../../loginPage/index.html");


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


//Envio de dados a API
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

//Troca de paginas pelo Select
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


// Requisição GET para obter os dados dos servicos da API
document.addEventListener('DOMContentLoaded', () => {
  const divCrudServ = document.querySelector('.crud-SERV');
  const dynamicTableContainer = document.getElementById('dynamic-table-container');

  fetch('http://localhost:3000/Services')
    .then(response => response.json())
    .then(data => {
      const newTable = document.createElement('table');
      newTable.classList.add('dynamic-table');

      const headerRow = document.createElement('tr');
      headerRow.classList.add('dynamic-table-row');
      const headers = ['SERVIÇOS', 'HORARIO', 'DATA', 'NOME'];
      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.classList.add('dynamic-table-header');
        headerRow.appendChild(th);
      });
      newTable.appendChild(headerRow);

      data.forEach(item => {
        const row = document.createElement('tr');
        row.classList.add('dynamic-table-row');
        const columns = [item.Nome, item.Horarios, item.Data, item.NomePaciente];
        columns.forEach(columnText => {
          const td = document.createElement('td');
          td.textContent = columnText;
          td.classList.add('dynamic-table-cell');
          row.appendChild(td);
        });
        newTable.appendChild(row);
      });

      dynamicTableContainer.appendChild(newTable);
    })
    .catch(error => console.error('Erro ao fazer a solicitação:', error));
});

//delete services
document.getElementById('deleteServices').addEventListener('click', async () => {
  const serviceName = prompt("Insira o nome do serviço:"); // Nome do serviço que deseja deletar

  try {
    // Obter os serviços pelo nome
    const serviceResponse = await fetch(`http://localhost:3000/Services?Nome=${serviceName}`);
    const serviceData = await serviceResponse.json();

    if (!serviceName) return alert("Sem serviços inseridos");

    if (serviceData.length === 0) return alert('Serviço não encontrado');

    const serviceId = await selectService(serviceData); // Obter o ID do serviço selecionado

    if (!serviceId) return; // O usuário cancelou a seleção

    // Deletar o serviço pelo ID
    const deleteResponse = await fetch(`http://localhost:3000/Services/${serviceId}`, {
      method: 'DELETE'
    });

    if (deleteResponse.ok) {
      alert(`${serviceName} foi deletado com sucesso`);
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

function selectService(serviceData) {
  return new Promise((resolve) => {
    let selection = prompt(
      `Selecione o serviço a ser deletado:\n${serviceData
        .map((service, index) => `${index + 1}. ${service.Nome}`)
        .join('\n')}`
    );

    if (selection === null) {
      // O usuário cancelou a seleção
      resolve(null);
      return;
    }

    selection = parseInt(selection, 10);
    if (isNaN(selection) || selection < 1 || selection > serviceData.length) {
      alert('Seleção inválida. Tente novamente.');
      resolve(selectService(serviceData));
    } else {
      const serviceIndex = selection - 1;
      resolve(serviceData[serviceIndex]._id);
    }
  });
}




// document.getElementById('deleteServices').addEventListener('click', async () => {
//   const id = "6479ebe5ad8289a8f8c38de3"; // Object ID do serviço que deseja deletar

//   try {
//     const response = await fetch(`http://localhost:3000/Services/${id}`, {
//       method: 'DELETE'
//     });

//     if (response.ok) {
//       console.log('Serviço deletado com sucesso!');
//       // Faça algo adicional, se necessário
//     } else {
//       console.error('Falha ao deletar serviço:', response.status);
//     }
//   } catch (error) {
//     console.error('Ocorreu um erro:', error);
//   }
// });



//Delete services
document.getElementById('updateServices').addEventListener('click', () => {
  alert("funfando")
})


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
var dataInput = document.getElementById("dataForm");
var dataAtual = new Date().toISOString().split("T")[0];
dataInput.setAttribute("min", dataAtual)