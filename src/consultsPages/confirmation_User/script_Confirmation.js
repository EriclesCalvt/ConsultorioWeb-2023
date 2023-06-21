const isAuthenticated = document.cookie
.split("; ")
.find((row) => row.startsWith("token.auth="))
?.split("=")[1];

if (!isAuthenticated) window.location.replace("../../loginPage/index.html");

function confirmation() {
  window.location.href = "../especialidades_User/especialidades.html";
}


//Constantes paciente:
const name = localStorage.getItem("Nome");
const CPF = localStorage.getItem("CPF");
const RG = localStorage.getItem("RG");
const DATANASCIMENTO = localStorage.getItem("Data-Nascimento");
//Seletores das constantes:
document.querySelector("#p-name").textContent = name;
document.querySelector("#p-CPF").textContent = CPF;
document.querySelector("#p-RG").textContent = RG;
document.querySelector("#p-DATANASCIMENTO").textContent = DATANASCIMENTO;

//Constantes Agendamento:
const DataAgenda = localStorage.getItem("Data-Consulta");
const Horario = localStorage.getItem("Horario-Consulta");
const Especialidade = localStorage.getItem("especialityValue");

//Seletores dos agendamentos:
document.querySelector("#p-Data-Agendamento").textContent = DataAgenda;
document.querySelector("#p-horario-agendamento").textContent = Horario;
document.querySelector("#p-Especialidades-agendamento").textContent =
  Especialidade;

//constantes dos medicos:
const selectedDoctorName = localStorage.getItem("selectedDoctorName");

//Seletores dos médicos:
document.querySelector("#p-medico-agendamento").textContent =
  selectedDoctorName;
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

//Envio a API:
// Obtenha o elemento do botão por ID
const button = document.querySelector('button');

// Adicione um evento de clique ao botão
button.addEventListener('click', () => {
  // Obtenha os valores das tags <p> por ID
  const dataAgendamento = document.getElementById('p-Data-Agendamento').textContent;
  const medicoAgendamento = document.getElementById('p-medico-agendamento').textContent;
  const horarioAgendamento = document.getElementById('p-horario-agendamento').textContent;
  const especialidadeAgendamento = document.getElementById('p-Especialidades-agendamento').textContent;
  const nomePaciente = document.getElementById('p-name').textContent;
  const rgPaciente = document.getElementById('p-RG').textContent;
  const cpfPaciente = document.getElementById('p-CPF').textContent;
  const dataNascimentoPaciente = document.getElementById('p-DATANASCIMENTO').textContent;

  // Crie um objeto com os dados
  const consulta = {
    agendamento: {
      data: dataAgendamento,
      horario: horarioAgendamento,
      medico: medicoAgendamento,
      especialidade: especialidadeAgendamento,
    },
    paciente: {
      nome: nomePaciente,
      rg: rgPaciente,
      cpf: cpfPaciente,
      dataNascimento: dataNascimentoPaciente,
    }
  };

  // Envie os dados para a rota da sua API MongoDB
  fetch('http://localhost:3000/Querie/Insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(consulta)
  })
    .then(response => response.json())
    .then(data => {
      // Manipule a resposta da API conforme necessário
      alert("Consulta Marcada !")
      setInterval(()=> {
        window.location.href = "../home_User/home_User.html"
      }, 500)
      console.log(data);
    })
    .catch(error => {
      // Manipule erros de requisição
      alert("Algum erro aconteceu !")
      console.error(error);
    });
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
