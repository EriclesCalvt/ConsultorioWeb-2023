document.querySelector("#alterarDados").addEventListener("click", ()=> {
  window.location.href = "../../alterarDados/index.html"
})
document.querySelector("#sairDaConta").addEventListener("click", ()=> {
  setInterval(()=> {
    window.location.href = "../../../loginPage/index.html"
  }, 300)
  alert("Usuário desconectado!")
})