alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1); // variável que guarda o número secreto
let chute;
let tentativas = 1;

// enquanto = while
//enquanto o chute for diferente do número secreto, o jogo continua
// != não é igual
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100:');
    // condição = if
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('Errou! O número secreto é menor que ' + chute);
        } else {
            alert('Errou! O número secreto é maior que ' + chute);
        }
        //tentativas = tentativas + 1;, mas existe uma forma mais simples:
        tentativas++;
    }
}

//Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas == 1) {
   // alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//} else {
    //alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}