// 002-exercicio-node-basico.js
// Objetivo: praticar variáveis, operadores e repetição no Node

// 1) Crie uma variável chamada "n" e coloque um número inteiro nela
const n = 5; // <-- troque esse 0 por um número

// 2) Imprima: "O dobro de n é X" (onde X é o dobro)
console.log("O dobro de n é: ", n * 2);


// 3) Se n for múltiplo de 5, imprima "Multiplo de 5"
//    Senão, imprima "Nao e multiplo de 5"
if (n % 5 == 0) {
  console.log("Multiplo de 5");
} else {
  console.log("Nao e multiplo de 5");
}

// 4) Faça um laço que imprima de 1 até n (um por linha)
//    Exemplo: se n = 3, imprime 1, depois 2, depois 3
// Dica: use for ou while

for (let m = 1; m <= n; m++){
    console.log(m)
}