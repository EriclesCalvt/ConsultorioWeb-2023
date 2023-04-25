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
