// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos, para fácil identificação
// Não pode começar o nome de uma constante com um número
// Não pode conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
//Não pode modificar o calor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
