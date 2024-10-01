let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varSaveA = varA;

/* varA = varB;
varB = varC;
varC = varSaveA; */

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);