const isAuthenticated = document.cookie
.split("; ")
.find((row) => row.startsWith("token.auth="))
?.split("=")[1];

if (!isAuthenticated) window.location.replace("../../loginPage/index.html");
const buttons$ = document.getElementsByClassName("especialitys");

const especialitysBtns = document.getElementsByClassName("especialitys");

for (let i = 0; i < especialitysBtns.length; i++) {
  especialitysBtns[i].addEventListener("click", function () {
    const especialityValue = this.value;
    localStorage.setItem("especialityValue", especialityValue);
  });
}

function especialitys() {
  window.location.href = "../professional_User/professional_User.html";
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


document.getElementById('footerWhatsapp').addEventListener('click', ()=> {
  window.location.href = "https://wa.link/alopsy"
})
document.getElementById('footerFacebook').addEventListener('click', ()=> {
  window.location.href = "https://www.facebook.com/profile.php?id=100090094286048"
})
document.getElementById('footerInstagram').addEventListener('click', ()=> {
  window.location.href = "https://instagram.com/cmed.especialidades"
})
