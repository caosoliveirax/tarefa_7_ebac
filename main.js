const form = document.getElementById('form-valores');
let formEValido = false; // Variavel para que o formulário inicie sendo falso

// Event listener para o formulário quando é submetido
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Isso impede o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    const saldoAtual = parseFloat(document.getElementById('saldo-atual').value);
    const precoProduto = parseFloat(document.getElementById('preço-item').value);

    // Chama a função para verificar o saldo
    validaSaldo(saldoAtual, precoProduto)
});

// Função que verifica se o saldo é maior que o preço do produto
function validaSaldo(saldoAtual, precoProduto) {
    const mensagemSucessoContainer = document.querySelector('.sucess-message')
    const mensagemErroContainer = document.querySelector('.error-message');
    const inputSaldoAtual = document.getElementById ('saldo-atual')
    const inputPrecoProduto = document.getElementById('preço-item')

    if (saldoAtual>= precoProduto) {
        // Se for um valor valido, exibe uma mensagem de sucesso
        const mensagemSucesso = `Você tem R$ ${saldoAtual.toFixed(2)} disponíveis e pode comprar o produto de R$ ${precoProduto.toFixed(2)}!`;
        // Insere a mensagem no container
        mensagemSucessoContainer.innerHTML = mensagemSucesso;
        mensagemSucessoContainer.style.display = 'block'

        // Limpa os campos do formulario
        inputSaldoAtual.value = '';
        inputPrecoProduto.value = '';
        
    } else {
        //Caso contrário, destacar o campo do saldo em vermelho e exibe mensagem de erro
        inputSaldoAtual.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
}

console.log(form)