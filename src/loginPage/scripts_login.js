const bcrypt = require("bcrypt");
const UserController = require("../../CRUD-NODE-JS/src/controllers/UserController");

// selecionar o formulário de login e escutar o evento de submit
const form = document.querySelector("#Formulario");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  // obter os valores dos campos de email e senha do formulário de login
  const emailInput = form.querySelector("#email");
  const passwordInput = form.querySelector("#password");
  const email = emailInput.value;
  const password = passwordInput.value;

  // enviar os dados de login para o servidor
  const response = await fetch("http://localhost:3000/User", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  // verificar se o login foi bem-sucedido ou não
  const data = await response.json();

  if (response.ok) {
    // o login foi bem-sucedido, redirecionar para a página desejada
    window.location.href = "../consultsPages/home_User/home_User.html";
  } else {
    // o login falhou, mostrar uma mensagem de erro
    alert(data.error);
  }
}
