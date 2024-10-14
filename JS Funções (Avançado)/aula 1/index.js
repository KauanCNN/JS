// Declaração de função (Function hoisting)
falaOi();
function falaOi(){
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dade.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estoufalando...');
    }
};
obj.falar();