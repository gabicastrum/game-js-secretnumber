alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4; // variável que guarda o número secreto
console.log(numeroSecreto); // exibe o número secreto no console'
let chute = prompt('Escolha um número entre 1 e 30:'); // pede ao usuário para escolher um número
// colocar let antes do prompt para armazenar o valor digitado pelo usuário

// condição = if
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto, que é ${numeroSecreto}`);
} else {
    alert(`Que pena :( O número secreto não é ${chute}`);
}

//Template string