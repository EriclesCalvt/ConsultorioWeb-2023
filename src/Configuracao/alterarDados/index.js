// selecao de option
document.addEventListener('DOMContentLoaded', () => {
  const inputNome = document.getElementById('input-nome');
  const inputRG = document.getElementById('RG');
  const inputCPF = document.getElementById('CPF');
  const inputTelefone = document.getElementById('telefone');
  const inputData = document.getElementById('Data');
  const inputCEP = document.getElementById('CEP');
  const inputCidade = document.getElementById('cidade');
  const inputBairro = document.getElementById('bairro');
  const inputRua = document.getElementById('rua');
  const inputNumeroCasa = document.getElementById('numero-casa');
  const selectSexo = document.getElementById('select-sexo');

  fetch('http://localhost:3000/Products')
    .then(response => response.json())
    .then(data => {
      selectSexo.innerHTML = '';
      data.forEach(product => {
        const option = document.createElement('option');
        option.value = product.NomeProduct; // Defina  a propriedade correta para o ID da conta
        option.textContent = product.NomeProduct; // Defina a propriedade correta para o nome da conta
        selectSexo.appendChild(option);       
      });      
    })
    .catch(error => {
      console.error('Erro ao obter os dados da API:', error);
    });

  selectSexo.addEventListener('change'  , () => {
    const selectedProductId = selectSexo.value;

    if (selectedProductId) {
      fetch(`http://localhost:3000/Products/${selectedProductId}`)
        .then(response => response.json())
        .then(product => {
          if (data.length > 0) {
          const product = data[0];
          console.log(product)
          inputNome.value = product.NomeProduct;
          inputRG.value = product.Rg;
          inputCPF.value = product.Cpf;
          inputTelefone.value = product.Telefone;
          inputData.value = product.Nascimento;
          inputCEP.value = product.Cep;
          inputCidade.value = product.Cidade;
          inputBairro.value = product.Bairro;
          inputRua.value = product.Rua;
          inputNumeroCasa.value = product.NumeroCasa;
          }else{
            console.log("Nenhum produto encontrado")
          }
        })
        .catch(error => {
          console.error('Erro ao obter os dados do produto:', error);
        });
    } else {
      inputNome.value = '';
      inputRG.value = '';
      inputCPF.value = '';
      inputTelefone.value = '';
      inputData.value = '';
      inputCEP.value = '';
      inputCidade.value = '';
      inputBairro.value = '';
      inputRua.value = '';
      inputNumeroCasa.value = '';
      inputComplemento.value = '';
    }
  });
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