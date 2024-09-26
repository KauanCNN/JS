let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2); (num1 = string somente nessa linha)
// num1 = num1.toString(); (num 1 = string pra sempre)
// console.log(num1.toFixed(2));
// console.log(num1.isInteger(num1)); (verifica se o numero é inteiro)