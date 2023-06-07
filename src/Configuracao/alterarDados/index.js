// selecao de option
document.addEventListener('DOMContentLoaded', () => {
  const inputNome = document.getElementById('input-nome');
  const inputRG = document.getElementById('RG');
  const inputCPF = document.getElementById('CPF');
  const inputTelefone = document.getElementById('telefone');
  const inputData = document.getElementById('Data');
  const selectSexo1 = document.getElementById('select-sexo1');
  const inputCEP = document.getElementById('CEP');
  const inputCidade = document.getElementById('cidade');
  const inputBairro = document.getElementById('bairro');
  const inputRua = document.getElementById('rua');
  const inputNumeroCasa = document.getElementById('numero-casa');
  const inputComplemento = document.getElementById('complemento');
  const selectSexo = document.getElementById('select-sexo');

  fetch('http://localhost:3000/Products')
    .then(response => response.json())
    .then(data => {
      selectSexo.innerHTML = '';Nivel de relacionamento com o dono(a) desta conta
        const option = document.createElement('option');
        option.value = product._id;
        option.textContent = product.NomeProduct;
        selectSexo.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Erro ao obter os dados da API:', error);
    });

  selectSexo.addEventListener('change', () => {
    const selectedProductId = selectSexo.value;

    if (selectedProductId) {
      fetch(`http://localhost:3000/Products/${selectedProductId}`)
        .then(response => response.json())
        .then(product => {
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
          inputComplemento.value = product.Complemento;
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
