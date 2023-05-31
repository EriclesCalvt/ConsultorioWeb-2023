document.querySelector("#alterarDados").addEventListener("click", ()=> {
  window.location.href = "../../alterarDados/index.html"
})

document.querySelector("#sairDaConta").addEventListener("click", () => {
  // Função para excluir um cookie pelo nome
  function deleteCookie(name) {
    document.cookie = name + '=; expires=, 01 Jan 2000 00:00:00 UTC; path=/ConsultorioWeb-2023/src/loginPage;';
  }

  // Limpar o token dos cookies
  deleteCookie("token.auth");

  // Redirecionar para a página de login
  window.location.replace("../../../loginPage/index.html");
});
