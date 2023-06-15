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
function displayContainer(){
  const container =document.getElementById('Container');
  container.style.display = "none";
}


//Puxar da Api
fetch("http://localhost:3000/Querie")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    if(data[0] == null) {
      displayContainer();
      }

    // Se houver consultas, crie uma nova caixa para cada consulta
    if (data.length > 0) {
      var consultasContainer = document.querySelector(".Main-box");
      for (var i = 0; i < data.length; i++) {
        var consulta = data[i];

        var novaCaixa = document.createElement("div");
        novaCaixa.className = "box-1";

        var consultas = document.createElement("div");
        consultas.className = "consultas";

        var textoBox = document.createElement("div");
        textoBox.className = "texto-box";

        var titulo = document.createElement("h2");
        titulo.textContent = "Consultas marcadas:";

        textoBox.appendChild(titulo);
        consultas.appendChild(textoBox);
        novaCaixa.appendChild(consultas);

        var agendamentoTitulo = document.createElement("h3");
        agendamentoTitulo.textContent = "Agendamento:";
        novaCaixa.appendChild(agendamentoTitulo);

        var dataLabel = document.createElement("label");
        dataLabel.setAttribute("for", "");
        dataLabel.textContent = "Data:";
        novaCaixa.appendChild(dataLabel);

        var dataP = document.createElement("p");
        dataP.textContent = consulta.agendamento.data; // substitua o valor do campo Data com os dados da API
        novaCaixa.appendChild(dataP);

        var profissionalLabel = document.createElement("label");
        profissionalLabel.setAttribute("for", "");
        profissionalLabel.textContent = "Profissional:";
        novaCaixa.appendChild(profissionalLabel);

        var profissionalP = document.createElement("p");
        profissionalP.textContent = consulta.agendamento.medico; // substitua o valor do campo Profissional com os dados da API
        novaCaixa.appendChild(profissionalP);

        var pacienteTitulo = document.createElement("h3");
        pacienteTitulo.textContent = "Paciente:";
        novaCaixa.appendChild(pacienteTitulo);

        var nomeLabel = document.createElement("label");
        nomeLabel.setAttribute("for", "");
        nomeLabel.textContent = "Nome:";
        novaCaixa.appendChild(nomeLabel);

        var nomeP = document.createElement("p");
        nomeP.textContent = consulta.paciente.nome; // substitua o valor do campo Nome com os dados da API
        novaCaixa.appendChild(nomeP);

        var rgLabel = document.createElement("label");
        rgLabel.setAttribute("for", "");
        rgLabel.textContent = "RG:";
        novaCaixa.appendChild(rgLabel);

        var rgP = document.createElement("p");
        rgP.textContent = consulta.paciente.rg; // substitua o valor do campo RG com os dados da API
        novaCaixa.appendChild(rgP);

        consultasContainer.appendChild(novaCaixa);
      }
    }
  })
  .catch(function (error) {
    console.log(error);
  });


document.getElementById('footerWhatsapp').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com"
})
document.getElementById('footerFacebook').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com"
})
document.getElementById('footerInstagram').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com/cmed.especialidades"
})