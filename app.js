alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5; // variável que guarda o número secreto
console.log(numeroSecreto); // exibe o número secreto no console, apenas para testar
let chute
// colocar let antes do prompt para armazenar o valor digitado pelo usuário

// enquanto = while
//enquanto o chute for diferente do número secreto, o jogo continua
// != não é igual
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30:');
    // condição = if
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto, que é ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert('Errou! O número secreto é menor que ' + chute);
        } else {
            alert('Errou! O número secreto é maior que ' + chute);
        }
    }
}