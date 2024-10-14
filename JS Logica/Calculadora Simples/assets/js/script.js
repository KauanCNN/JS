const recieveVisor = document.querySelector('.resultado');
let primeiroNumero = '';
let segundoNumero = '';
let operador = '';
const btnNum = document.querySelectorAll('.num');
let resetar = 0;
let resultado = '';


function visor() {
    for(let n = 0; n < btnNum.length ; n++){
    const btnNumber = btnNum[n];
    btnNumber.addEventListener('click', function(){
        if(resultado != 0 && !operador)
            resetar = 1;

        if(resetar == 1){
            recieveVisor.value = '';
            primeiroNumero = '';
            resultado = 0;
            resetar = 0;
        } 

        recieveVisor.value += btnNumber.value; 

        if (!operador){
            primeiroNumero += btnNumber.value;
    }
        if (operador){
            
            segundoNumero += btnNumber.value
        }
        console.log(`primeiro numero: ${primeiroNumero}`);
        console.log(`segundo numero: ${segundoNumero}`);
    })
}
}
visor();

function btnOperador(){
    const opButtons = document.querySelectorAll('.op');
    
    for(let op = 0; op < opButtons.length; op++){
        const btnOp = opButtons[op];
    
        btnOp.addEventListener('click', () =>{
            // console.log(btnOp.value);
            operador = btnOp.value;  
            recieveVisor.value = '';
            // console.log(operador);
        });
    }
}
btnOperador();

const btnIgual = document.getElementById('igual');
btnIgual.addEventListener('click', () => {
    if (primeiroNumero && segundoNumero && operador) {
        resultado = calcular();
        recieveVisor.value = resultado;
        primeiroNumero = resultado;
        segundoNumero = '';
        operador = '';
    } 
});

const btnPorcent = document.getElementById('%')
btnPorcent.addEventListener('click', function(){
    if(!operador){
        primeiroNumero = parseFloat(primeiroNumero) / 100;
        recieveVisor.value = primeiroNumero;
    } else {
        segundoNumero = parseFloat(segundoNumero) / 100
        recieveVisor.value = segundoNumero;
    }
})

const btnCE = document.getElementById('limpar');
    btnCE.addEventListener('click', function(){
        primeiroNumero = '';
        segundoNumero = '';
        operador = '';
        recieveVisor.value = '';
})

const btnApagar = document.getElementById('apagar');
    btnApagar.addEventListener('click', function(){
        if(recieveVisor.value.length > 0){
            recieveVisor.value = recieveVisor.value.slice(0, -1);
        }
        
        if (!operador) {
            primeiroNumero = primeiroNumero.slice(0, -1);
        } else {
            segundoNumero = segundoNumero.slice(0, -1);
        }
})

const btnInverter = document.getElementById('inverter');
    btnInverter.addEventListener('click', function(){
        recieveVisor.value = -recieveVisor.value;

        if (!operador) {
            primeiroNumero = -primeiroNumero
        } else {
            segundoNumero = -segundoNumero
        }
})

const btnDecimal = document.getElementById('decimal');
    btnDecimal.addEventListener('click', () => {
        if (!recieveVisor.value.includes(',')) {
            recieveVisor.value += ',';
            if (!operador) {
                primeiroNumero += '.';
            } else {
                segundoNumero += '.';
            }
        }
});

function calcular() {
    let num1 = parseFloat(primeiroNumero);
    let num2 = parseFloat(segundoNumero);

    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
        default:
            return 'Erro: operador inválido';
    }
}