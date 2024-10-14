function retornaFuncao(nome){
    return function(){
        return nome
    };
}

const funcao = retornaFuncao('Kauan');
const funcao2 = retornaFuncao('Caio');
console.log (funcao(), 'e', funcao2());