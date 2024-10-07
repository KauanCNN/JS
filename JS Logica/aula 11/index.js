const pessoa = {
    nome: 'Kauan' ,
    sobrenome: 'Nascimento' ,
    idade: 20 , 
    endereco: {
        rua: 'Sergipe' , 
        numero: 13
    }
};

// Atribuição via desestruturação
const { nome: n, sobrenome } = pessoa;
console.log(n, sobrenome);