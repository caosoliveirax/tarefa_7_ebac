const form = document.getElementById('form-valores');
let formEValido = false;

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

    // Verifica se o saldo é válido e se pode submeter o formulário
    if (validaSaldo(saldoAtual, precoProduto)) {
        // Exibe a mensagem de sucesso ao submeter o formulário de forma válida
        const mensagemSucesso = `Você tem R$ ${saldoAtual.toFixed(2)} disponíveis e pode comprar o produto de R$ ${precoProduto.toFixed(2)}!`;
        mensagemSucessoContainer.innerHTML = mensagemSucesso;
        mensagemSucessoContainer.style.display = 'block';
        mensagemErroContainer.style.display = 'none';

        // Limpa os campos do formulário após o sucesso
        inputSaldoAtual.value = '';
        inputPrecoProduto.value = '';
    } else {
        // Caso o saldo não seja suficiente, mantém o feedback visual de erro
        mensagemErroContainer.style.display = 'block';
        mensagemSucessoContainer.style.display = 'none';
    }
});

// Função que verifica se o saldo é maior que o preço do produto
function validaSaldo(saldoAtual, precoProduto) {
    if (saldoAtual >= precoProduto) {
        // Se for válido, retorna 'true' mas não exibe a mensagem de sucesso aqui
        return true;
    } else {
        // Caso contrário, destaca o campo do saldo em vermelho e exibe mensagem de erro
        inputSaldoAtual.style.border = '1px solid red';
        return false;
    }
}

// Event listener para o campo de saldo enquanto o usuário digita
inputSaldoAtual.addEventListener('keyup', function() {
    const saldoAtual = parseFloat(inputSaldoAtual.value);
    const precoProduto = parseFloat(inputPrecoProduto.value);

    // Verifica se ambos os valores são números válidos antes de chamar a função
    if (!isNaN(saldoAtual) && !isNaN(precoProduto)) {
        // Apenas realiza a validação para feedback visual (não exibe mensagem de sucesso)
        if (saldoAtual >= precoProduto) {
            // Se for válido, remove o erro visual
            inputSaldoAtual.classList.remove('error');
            mensagemErroContainer.style.display = 'none';
        } else {
            // Caso contrário, exibe o erro visual
            inputSaldoAtual.classList.add('error');
            mensagemErroContainer.style.display = 'block';
        }
    }
});
