document.querySelector("#alterarDados").addEventListener("click", ()=> {
  window.location.href = "../../alterarDados/index.html"
})

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


document.querySelector("#sairDaConta").addEventListener("click", () => {
  // Função para excluir um cookie pelo nome
  function deleteCookie(name) {
    document.cookie = name + '=; expires=, 01 Jan 2000 00:00:00 UTC; path=/';
  }

  // Limpar o token dos cookies
  deleteCookie("token.auth");

  // Redirecionar para a página de login
  window.location.replace("../../../loginPage/index.html");
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