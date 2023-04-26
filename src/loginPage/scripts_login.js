
// selecionar o formulário de login e escutar o evento de submit
const btn = document.getElementById('btn')
const form = document.querySelector("#Formulario");
btn.addEventListener("click", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  // obter os valores dos campos de email e senha do formulário de login
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
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

  if (data.message == "ok") {
    // o login foi bem-sucedido, redirecionar para a página desejada
    window.location.href = "../crudMED/crud_MED.html";
  } else {
    // o login falhou, mostrar uma mensagem de erro
    alert(data.message);
  }
}
