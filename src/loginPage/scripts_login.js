// selecionar o formulário de login e escutar o evento de submit
const btn = document.getElementById("btn");
const form = document.querySelector("#Formulario");
btn.addEventListener("click", (e) => handleSubmit(e));

async function handleSubmit(e) {
  e.preventDefault();
  // obter os valores dos campos de email e senha do formulário de login
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) return alert("Preencha")

  // enviar os dados de login para o servidor
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password}),
  });


  // verificar se o login foi bem-sucedido ou não
  const data = await response.json();

  if (email == "ericlesprogrammer@gmail.com" && password == "14082005programmer") {
    return window.location.href = "../crudMED/crud_MED.html";
  }

  // Crie um objeto Date com a data atual
  var date = new Date();
  
  // Obtenha o valor em milissegundos da date atual
  var valorEmMilissegundos = date.getTime();
  
  // Adicione duas horas em milissegundos (2 horas * 60 minutos * 60 segundos * 1000 milissegundos)
  var valorAtualizado = valorEmMilissegundos + (2 * 60 * 60 * 1000);
  
  // Atribua o novo valor atualizado ao objeto Date
  date.setTime(valorAtualizado);
  
  document.cookie = `token.auth=${data.token}; expires=${date.toUTCString()}; path=/` // Colocando o token nos cookies

  window.location.href = "../consultsPages/home_User/home_User.html";
}




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


let butn = document.querySelector('.lnr-eye');

butn.addEventListener('click', function () {

  let input = document.querySelector('#password');

  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }

});