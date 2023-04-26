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
