function relogio(){
function getTimer(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer ;
let emExecucao = false;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimer(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('iniciar')){
        if (!emExecucao){
        relogio.classList.remove('pausado');
        clearInterval (timer);
        iniciaRelogio();
        emExecucao = true;
     }
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
        emExecucao = false;
    }
    
    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0
        emExecucao = false;
    }

});

// iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     clearInterval (timer);
//     iniciaRelogio();
// })

// pausar.addEventListener('click', function(event){
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// })

// zerar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0
// })
}
relogio();