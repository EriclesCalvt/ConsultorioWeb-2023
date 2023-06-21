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

  document.getElementById('footerWhatsapp').addEventListener('click', ()=> {
    window.location.href = "https://wa.link/alopsy"
  })
  document.getElementById('footerFacebook').addEventListener('click', ()=> {
    window.location.href = "https://www.facebook.com/profile.php?id=100090094286048"
  })
  document.getElementById('footerInstagram').addEventListener('click', ()=> {
    window.location.href = "https://instagram.com/cmed.especialidades"
  })
  