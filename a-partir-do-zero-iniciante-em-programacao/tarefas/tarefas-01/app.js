// 01. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Boas vindas ao nosso site!');

// 02. Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = 'lua';

// 03. Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

// 04. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

// 05. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

// 06. Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert('Erro! Preencha todos os campos');

// 07. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = 'Erro! Preencha todos os campos.';
alert(mensagemDeErro);

// 08. Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
let nomeParticipante = prompt('Qual o seu nome?')
alert('O nome do participante é ' + nomeParticipante);

// 09. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idadeParticipante = prompt('Qual a sua idade?');
alert('A idade do participante é ' + idadeParticipante);

// 10. Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idadeParticipante >= 18) {
    alert('O candidato ' + nomeParticipante + ' tem ' + idadeParticipante + ' anos e pode tirar a carteira de motorista.')
} else {
    alert('O candidato ' + nomeParticipante + ' tem ' + idadeParticipante + ' anos e NÃO pode tirar a carteira de motorista.')
}