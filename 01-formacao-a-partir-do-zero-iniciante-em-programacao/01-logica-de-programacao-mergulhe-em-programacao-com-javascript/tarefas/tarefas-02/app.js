// 01. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt('Qual o dia da semana?');

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// 02. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt('Digite um número.')

if (numero >= 0) {
    alert(`O numero digitado foi ${numero}. É umm número positivo.`)
} else {
    alert(`O numero digitado foi ${numero}. É umm número positivo.`)
}

// 03. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontos = prompt('Digite um número.')

if (pontos >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar.')
}

// 04. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldoConta = 5000
alert(`Seu saldo é de R$ ${saldoConta},00.`)

// 07 Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomeUsuario = prompt('Digite seu nome.')
alert(`Seja bem-vindo Sr. ${nomeUsuario}.`)
