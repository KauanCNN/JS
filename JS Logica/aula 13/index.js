// For in -> lê os índices ou chaves do objeto
const frutas = ['Pera', 'Maçã', 'Uva']

const pessoa = {
    nome: 'Kauan',
    sobrenome: 'Nascimento',
    idade: 20
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// for (let index in frutas){
//     console.log(frutas[index]);
// }



// for (let i = 0; i <frutas.length; i++){
//     console.log( frutas[i]);
// }
