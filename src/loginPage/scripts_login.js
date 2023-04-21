var t = false;
var abrirMenuu = document.getElementById("abrirMenu");
function abrirMenu() {
  abrirMenuu.classList.toggle("abrirMenu");
  abrirMenuu.classList.toggle("movimentacao");
}

// seleciona o formulário e adiciona um event listener para o envio do formulário
document.getElementById("Formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // impede que o formulário seja enviado normalmente

  // obtem os valores dos campos de email e senha
  const nome = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // faz uma chamada para a API para verificar se as credenciais são válidas
  fetch("http://localhost:3000/User", {
    method: "POST",
    body: JSON.stringify({ nome, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // se a resposta da API for OK, a sessão do usuário será configurada e o usuário será redirecionado
        // configura a sessão do usuário
        sessionStorage.setItem("userLoggedIn", "true");

        // redireciona o usuário para a página desejada
        window.location.href = "../consultsPages/home_User/home_User.html";
      } else {
        // se a resposta da API não for OK, exibe uma mensagem de erro
        alert("Credenciais inválidas");
      }
    })
    .catch((error) => {
      console.error("Erro ao fazer login", error);
      alert("Erro ao fazer login");
    });
});
