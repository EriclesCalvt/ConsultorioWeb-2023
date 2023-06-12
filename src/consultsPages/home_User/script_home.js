// Auth
  const isAuthenticated = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token.auth="))
    ?.split("=")[1];
  
  if (!isAuthenticated) window.location.replace("../../loginPage/index.html");

// Switch pages
document.getElementById('urlRote').addEventListener("click", () => {
  window.location.href = "../dados_User/dados_User.html";
});

document.getElementById('settings').addEventListener('click', ()=> {
  window.location.href = "../../Configuracao/alterarDados/loggout/index.html";
});

document.getElementById('minhaConta').addEventListener('click', ()=> {
  window.location.href = "../minhaConta/minhaConta.html";
});

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


document.getElementById('footerWhatsapp').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com"
})
document.getElementById('footerFacebook').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com"
})
document.getElementById('footerInstagram').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com/cmed.especialidades"
})