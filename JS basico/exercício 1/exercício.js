/*
 kauan Cristian Navarro Nascimento tem 20 anos, pesa 82 kg
tem 1.7 de altura e seu IMC é de...
Kauan nasceu em 2004
*/
const nome = 'kauan Cristian';
const sobrenome = 'Navarro Nascimento';
const idade = 20;
const peso = 82;
const alturaEmM = 1.70;
let indicedeMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indicedeMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome , 'tem', idade , 'pesa', peso , 'Kg');
console.log('tem', alturaEmM, 'de altura e seu imc é de', indicedeMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento);