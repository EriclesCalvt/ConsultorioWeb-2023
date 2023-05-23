// selecionar o formulário de login e escutar o evento de submit
const btn = document.getElementById("btn");
const form = document.querySelector("#Formulario");
btn.addEventListener("click", handleSubmit);

/*document.getElementById("Whatsapp").addEventListener("click", () => {
  window.location.href = "https://wa.me/5585991985991";
});*/

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
    if (email == "ericlesprogrammer@gmail.com") {
      alert("Bem vindo ADM 😎");
      setTimeout(() => {
        window.location.href = "../crudMED/crud_MED.html";
      }, 500);
    } else {
      alert("Bem vindo ! ✅");
      setTimeout(() => {
        window.location.href = "../consultsPages/home_User/home_User.html";
      }, 500);
    }
  } else {
    // o login falhou, mostrar uma mensagem de erro
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


let butn = document.querySelector('.lnr-eye');

butn.addEventListener('click', function () {

  let input = document.querySelector('#password');

  if (input.getAttribute('type') == 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }

});