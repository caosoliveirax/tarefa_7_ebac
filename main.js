const form = document.getElementById('form-valores');
let formEValido = false; // Variavel para que o formulário inicie sendo falso

// Obtém os elementos de entrada
const inputSaldoAtual = document.getElementById('saldo-atual');
const inputPrecoProduto = document.getElementById('preço-item');
const mensagemSucessoContainer = document.querySelector('.sucess-message');
const mensagemErroContainer = document.querySelector('.error-message');

// Event listener para o formulário quando é submetido
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Isso impede o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    const saldoAtual = parseFloat(inputSaldoAtual.value);
    const precoProduto = parseFloat(inputPrecoProduto.value);

    // Chama a função para verificar o saldo
    validaSaldo(saldoAtual, precoProduto);
});

// Função que verifica se o saldo é maior que o preço do produto
function validaSaldo(saldoAtual, precoProduto) {
    if (saldoAtual>= precoProduto) {
        // Se for um valor valido, exibe uma mensagem de sucesso
        const mensagemSucesso = `Você tem R$ ${saldoAtual.toFixed(2)} disponíveis e pode comprar o produto de R$ ${precoProduto.toFixed(2)}!`;
        // Insere a mensagem no container
        mensagemSucessoContainer.innerHTML = mensagemSucesso;
        mensagemSucessoContainer.style.display = 'block';
        mensagemErroContainer.style.display = 'none';

        // Limpa os campos do formulario
        inputSaldoAtual.value = '';
        inputPrecoProduto.value = '';
        
        return true; //Indica que a validação foi bem sucedida
    } else {
        //Caso contrário, destacar o campo do saldo em vermelho e exibe mensagem de erro
        inputSaldoAtual.style.border = '1px solid red';
        mensagemErroContainer.style.display = 'block';
        mensagemSucessoContainer.style.display = 'none';

        return false; //Indica que a validação falhou
    }
}

//Event listener para o campo de nome do beneficiário enquanto o usuário digita
inputSaldoAtual.addEventListener('keyup', function(e) {
    const saldoAtual = parseFloat(inputSaldoAtual.value);
    const precoProduto = parseFloat(inputPrecoProduto.value);

    // Verifica se ambos os valores são números válidos antes de chamar a função
    if (!isNaN(saldoAtual) && !isNaN(precoProduto)) {
        formEValido = validaSaldo(saldoAtual, precoProduto);

    if (!formEValido) {
        //Se não for válido, adiciona a classe 'error' ao campo e exibe mensagem de erro
        inputSaldoAtual.classList.add('error');
        document.querySelector('.error-message').style.display = 'block'
    } else {
        //Caso contrário, remove a classe 'error' e esconde a mensagem de erro
        inputSaldoAtual.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none'
    }
}
})

console.log(form)