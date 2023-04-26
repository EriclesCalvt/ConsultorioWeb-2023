function run(doctorName) {
  // Verifica se o nome do médico foi passado como argumento
  if (doctorName) {
    // Armazena o nome do médico no LocalStorage
    localStorage.setItem("selectedDoctorName", doctorName);
    window.location.href = "../horario_User/horarios_User.html";
  }

  // Sua implementação aqui
}
async function fetchDoctors() {
  const response = await fetch("http://localhost:3000/Doctor");
  const doctors = await response.json();
  const buttonEspecialidade = document.querySelector("#button_especialidade");

  // Limpa a lista atual de botões
  buttonEspecialidade.innerHTML = "";

  // Adiciona um botão para cada médico retornado pela API
  for (const doctor of doctors) {
    const button = document.createElement("button");
    button.classList.add("doutor");
    button.addEventListener("click", () => {
      run(doctor.Name); // Passa o nome do médico como argumento
    });

    const div = document.createElement("div");
    const name = document.createElement("div");
    const crm = document.createElement("h6");

    name.textContent = `Nome: DR.${doctor.Name}`;
    crm.textContent = `CRM: ${doctor.crm}`;

    div.appendChild(name);
    div.appendChild(crm);
    button.appendChild(div);
    buttonEspecialidade.appendChild(button);
  }
}

fetchDoctors();
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
