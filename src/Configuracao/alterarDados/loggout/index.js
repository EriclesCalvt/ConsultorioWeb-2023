document.querySelector("#alterarDados").addEventListener("click", ()=> {
  window.location.href = "../../alterarDados/index.html"
})
document.querySelector("#sairDaConta").addEventListener("click", ()=> {
  setInterval(()=> {
    window.location.href = "../../../loginPage/Login.html"
  }, 300)
  alert("Usuário desconectado!")
})