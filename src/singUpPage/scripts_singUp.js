var t = false;
const btn = document.getElementById("btn");
btn.addEventListener("click", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  // obter os valores dos campos de email e senha do formulário de login
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const nome = emailInput.value;
  const password = passwordInput.value;

  // enviar os dados de login para o servidor
  const response = await fetch("http://localhost:3000/User/Insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, password }),
  });

  // verificar se o cadastro foi bem-sucedido ou não
  const data = await response.json();

  if (data.message == "ok") {
    // o cadastro foi bem-sucedido, redirecionar para a página desejada
    alert("Cadastrado com sucesso !, agora faça seu login !");
    setTimeout(() => {
      window.location.href = "../loginPage/Login.html";
    }, 500);
  } else {
    // o cadastro falhou, mostrar uma mensagem de erro
    alert(data.message);
  }
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
