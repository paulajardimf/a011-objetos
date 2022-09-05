// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = [];

// a) Crie três objetos que vão representar frutas do sacolão:
const fruta1 = {
    nome: "banana",
    preco: 9.00,
    disponibilidade: true
}

const fruta2 = {
    nome: "maçã",
    preco: 5.00,
    disponibilidade: true   
}

const fruta3 = {
    nome: "mamão",
    preco: 8.54,
    disponibilidade: false   
}

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1, fruta2, fruta3);

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao);