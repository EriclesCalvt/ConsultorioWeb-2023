const isAuthenticated = document.cookie // Verificando se o cookie de autenticação existe
  .split("; ")
  .find((row) => row.startsWith("token.auth="))
  ?.split("=")[1];

if (!isAuthenticated) window.location.replace = "../loginPage/index.html"

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
  const valueAlert = prompt("Insira o nome do serviço:")
  console.log(valueAlert)
  const serviceName = valueAlert; // Nome do serviço que deseja deletar

  try {
    // Obter o serviço pelo nome
    const serviceResponse = await fetch(`http://localhost:3000/Services?Nome=${serviceName}`);
    const serviceData = await serviceResponse.json();


    if(!serviceName) return alert("Sem serviços inseridos")
    
    if (serviceData.length === 0) {
      console.log('Serviço não encontrado');
      return;
    }

    const serviceId = serviceData[0]._id; // Obter o ID do serviço

    // Deletar o serviço pelo ID
    const deleteResponse = await fetch(`http://localhost:3000/Services/${serviceId}`, {
      method: 'DELETE'
    });

    if (deleteResponse.ok) {
      console.log('Serviço deletado com sucesso!');
      // Faça algo adicional, se necessário
    } else {
      console.error('Falha ao deletar serviço:', deleteResponse.status);
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
});



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