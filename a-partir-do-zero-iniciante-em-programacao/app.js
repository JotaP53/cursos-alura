alert('Boas vindas ao jogo do número secreto.');
let numeroSecreto = 75;
let chute = prompt('Escolha um número entre 1 e 100.');

if (numeroSecreto == chute) {
    // Essa característica abaixo é o TemplateString. Ele só funciona com a crase (` `)
    alert(`Você acertou o número secreto ${numeroSecreto}.`)
} else {
    alert('Você errou.')
}