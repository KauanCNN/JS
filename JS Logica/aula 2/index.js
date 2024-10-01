/*
Operadoes Lógicos
&& -> AND -> E (TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE)
|| -> OU -> OU 
! -> NOT -> NÃO
*/
// const expressaoAnd = true && true && true && true && true && true;
// const expressaoOr = true || false;

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);
