// 01. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador1 = 1;

while (contador1 < 11) {
    alert(contador1)
    contador1++
}

// 02. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador2 = 10;

while (contador2 > -1) {
    alert(contador2)
    contador2--
}

// 03. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contador3 = prompt('Digite um número.');
alert(`O número digitado foi ${contador3}. A partir de agora, começará a contagem regressiva.`);

while (contador3 > -1) {
    alert(contador3);
    contador3--
}

// 04. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let contador4 = 0;
let numeroFinal = prompt('Digite um número.');
alert(`O número digitado foi ${numeroFinal}. A partir de agora, começará a contagem progressiva.`);

while (contador4 <= numeroFinal) {
    alert(contador4);
    contador4++
}
