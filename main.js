const form = document.getElementById('form-valores');
let formEValido = false; // Variavel para que o formulário inicie sendo falso

// Event listener para o formulário quando é submetido
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Isso impede o envio padrão do formulário
})

console.log(form)