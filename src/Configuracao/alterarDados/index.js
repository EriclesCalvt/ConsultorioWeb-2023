//autenticacao
const isAuthenticated = document.cookie
.split("; ")
.find((row) => row.startsWith("token.auth="))
?.split("=")[1];

if (!isAuthenticated) window.location.replace("../../loginPage/index.html");


// Variáveis globais para os elementos de input e o ID selecionado
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
let selectedProductId = ''; // Declaração do ID selecionado

// Função para enviar os dados atualizados para a API e atualizar no MongoDB
function atualizarDados() {
  // Obtenha os valores dos inputs atualizados
  const nome = inputNome.value;
  const rg = inputRG.value;
  const cpf = inputCPF.value;
  const telefone = inputTelefone.value;
  const data = inputData.value;
  const cep = inputCEP.value;
  const cidade = inputCidade.value;
  const bairro = inputBairro.value;
  const rua = inputRua.value;
  const numeroCasa = inputNumeroCasa.value;

  // Construa o objeto com os dados atualizados
  const dadosAtualizados = {
    NomeProduct: nome,
    Rg: rg,
    Cpf: cpf,
    Cep: cep,
    Nascimento: data,
    NumeroCasa: numeroCasa,
    Rua: rua,
    Bairro: bairro,
    Cidade: cidade,
    Telefone: telefone,
  };

  // Realize a requisição PUT para a API
  fetch(`http://localhost:3000/Products/${selectedProductId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosAtualizados),
  })
    .then(response => response.json())
    .then(data => {
      alert("Sucesso!");
      console.log('Dados atualizados com sucesso:', data);

    })
    .catch(error => {
      alert("Ocorreu um erro!");
      console.error('Erro ao atualizar os dados:', error);
    });
}

// Adicione um evento ao formulário para chamar a função de atualização quando ocorrer um evento de envio
const form = document.querySelector('.form-user');
form.addEventListener('submit', event => {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário
  atualizarDados();
});

// selecao de option
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/Products')
    .then(response => response.json())
    .then(data => {
      selectSexo.innerHTML = '';
      data.forEach(product => {
        const option = document.createElement('option');
        option.value = product.NomeProduct; // Defina a propriedade correta para o ID da conta
        option.textContent = product.NomeProduct; // Defina a propriedade correta para o nome da conta
        selectSexo.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Erro ao obter os dados da API:', error);
    });

  // Preenchimento de dados quando selecionado o option
  selectSexo.addEventListener('change', () => {
    selectedProductId = selectSexo.value; // Atualiza o ID selecionado

    if (selectedProductId) {
      fetch(`http://localhost:3000/Products/${selectedProductId}`)
        .then(response => response.json())
        .then(product => {
          if (product) {
            console.log(product);
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
          } else {
            console.log("Nenhum produto encontrado");
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
    }
  });
});
