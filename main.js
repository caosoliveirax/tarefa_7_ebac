const form = document.getElementById('form-valores');
let formEValido = false; // Variavel para que o formulário inicie sendo falso



// Event listener para o formulário quando é submetido
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Isso impede o envio padrão do formulário

    const saldoAtual = parseFloat(document.getElementById('saldo-atual').value);
    const precoProduto = parseFloat(document.getElementById('preço-item').value);

    validaSaldo(saldoAtual, precoProduto)
})

// Função que verifica se o saldo é maior que o preço do produto
function validaSaldo(saldoAtual, precoProduto) {
    if (saldoAtual>= precoProduto) {
        alert ('Saldo suficiente! Você pode comprar o produto.');
    } else {
        alert ("Saldo insuficiente!");
    }
}

console.log(form)