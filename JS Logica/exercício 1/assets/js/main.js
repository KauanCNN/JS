function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

   

    function formEvent (evento){
            evento.preventDefault();
            const inputPeso = form.querySelector('.peso');
            const inputAltura = form.querySelector('.altura');
            const peso = Number(inputPeso.value);
            const altura = Number(inputAltura.value);
            const altura2 = (altura * altura);
            const IMC = (peso / altura2) ;
            resultado.innerHTML = ' ';
            if (!peso && !altura){
                resultado.innerHTML += '<p class="bad">Dados inválidos</p>';
                return;
            } else if (!peso){
                resultado.innerHTML += '<p class="bad">Peso invalido</p>';
                return;
            }   else if (!altura){
                resultado.innerHTML += '<p class="bad">Altura invalido</p>';
                return;
            } 

            if(IMC <18.5){
                resultado.innerHTML += `<p class="paragrafo-resultado">${IMC.toFixed(2)} - abaixo do peso</p>`;
                return;
            } else if (IMC >=18.5 && IMC <= 24.9){
                resultado.innerHTML += `<p class="paragrafo-resultado">${IMC.toFixed(2)} - Peso normal</p>`;
                return;
            } else if (IMC >= 25 && IMC <= 29.9){
                resultado.innerHTML += `<p class="paragrafo-resultado">${IMC.toFixed(2)} - Sobrepeso</p>`;
                return;
            } else if (IMC >= 30 && IMC <= 34.9){
                resultado.innerHTML += `<p class="paragrafo-resultado">${IMC.toFixed(2)} - Obesidade grau 1</p>`;
                return;
            } else if (IMC >= 35 && IMC <=39.9){
                resultado.innerHTML += `<p class="paragrafo-resultado">${IMC.toFixed(2)} - Obesidade grau 2</p>`;
                return;
            } else if (IMC >=40){
                resultado.innerHTML += `<p class="paragrafo-resultado">${IMC.toFixed(2)} - Obesidade graus 3</p>`;
                return;
    }
        resultado.innerHTML = ' ';

    }   
form.addEventListener('submit', formEvent);
}
meuEscopo();