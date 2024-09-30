const pessoa1 = {
    nome: 'Kauan' , 
    sobrenome: 'Nascimento',
    idade: 20,


    fala() { 
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();





// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade};
//     // return {
//     //     nome: nome,
//     //     sobrenome: sobrenome,
//     //     idade: idade
//     // };
// }

// const pessoa1 = criaPessoa('Vera', 'Nascimento', 60);
// const pessoa2 = criaPessoa('Wagner', 'Nascimento', 60);
// const pessoa3 = criaPessoa('Kely', 'Nascimento', 39);
// const pessoa4 = criaPessoa('Kevin', 'Nascimento', 28);
// const pessoa5 = criaPessoa('Kauan', 'Nascimento', 20);
// console.log(pessoa1.nome, pessoa2.nome );

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade:24 
// };

// const pessoa2 = {
//     nome: 'Kauan',
//     sobrenome: 'Nascimento',
//     idade:20 
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.idade);



// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = '24';

// const nome02 = 'Kauan';
// const sobrenome02 = 'Nascimento';
// const idade02 = '20';