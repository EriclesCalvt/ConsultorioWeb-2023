const url$ = document.getElementById("btn_Consult");
url$.addEventListener("click", () => {
  window.location.href = "../loginPage/index.html";
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

//carrossel:
  $(document).ready(function(){
    $('.carrossel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      prevArrow: null,
      cssEase: 'linear'
    });
  });

