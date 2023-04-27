var t = false;
const btn = document.getElementById("btn");
btn.addEventListener("click", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  // obter os valores dos campos de email e senha do formulário de login
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const email = emailInput.value;
  const password = passwordInput.value;

  // enviar os dados de login para o servidor
  const response = await fetch("http://localhost:3000/User/Insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  // verificar se o cadastro foi bem-sucedido ou não
  const data = await response.json();

  if (data.message == "ok") {
    // o cadastro foi bem-sucedido, redirecionar para a página desejada
    alert("Cadastrado com sucesso !");
    window.location.href = "../consultsPages/home_User/home_User.html";
  } else {
    // o cadastro falhou, mostrar uma mensagem de erro
    alert(data.message);
  }
}
