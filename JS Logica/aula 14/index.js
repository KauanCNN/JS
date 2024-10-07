const pessoa = {
    nome: 'Kauan',
    sobrenome: 'Nascimento',
};

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}

// for clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave  (strings,array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)



//            01234...
// const nome = 'Kauan Nascimento';

// for (let i= 0; i<nome.length; i++) {
//     console.log(nome[i]);
// }

// console.log('####');

// for (let i in nome){
//     console.log(nome[i]);
// }

// console.log('####');


// for (let valor of nome){
//     console.log(valor);
// }

// console.log('####');

// nome.forEach(function(valor, indice, array){
//     console.log(valor, indice, array);
// });