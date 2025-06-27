alert('Boas vindas ao jogo do número secreto.');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto (while) o chute não for igual ao número secreto, o jogo não para.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10.');

    // Se o chute for igual ao número secreto.
    if (numeroSecreto == chute) {
        // Essa característica abaixo é o TemplateString. Ele só funciona com a crase (` `)
        alert(`Você acertou, o número secreto é ${numeroSecreto}, com ${tentativas} tentativa(s).`);
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}.`);
        } else {
            alert(`O número secreto é menor que ${chute}.`);
        }
        // tentativas++ é seria a mesma coisa de tentativas = tentativas + 1
        tentativas++;
    }
}