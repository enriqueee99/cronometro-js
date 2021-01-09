const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const reiniciar = document.querySelector('#reiniciar');
let milisegundosTxt = document.querySelector('#milisegundos');
let segundosTxt = document.querySelector('#segundos');
let minutosTxt = document.querySelector('#minutos');
let intervalo;
let milisegundos = 0;
let segundos = 0;
let minutos = 0;


function eventListener(){
    iniciar.addEventListener('click', iniciarPararCro);
    pausar.addEventListener('click', pausarCro);
    reiniciar.addEventListener('click', reiniciarCro);
}
eventListener();

function iniciarPararCro(){
    clearInterval(intervalo);
    intervalo = setInterval(runTens, 10);
}

function runTens(){
    milisegundos++;
    if(milisegundos > 9){
        milisegundosTxt.textContent = milisegundos;
    } else if(milisegundos < 10){
        milisegundosTxt.textContent = '0' + milisegundos;
    }

    validarMilisegundos();
}

function validarMilisegundos(){
    if(milisegundos === 99){
        milisegundos = 0;
        milisegundosTxt.textContent = '0' + milisegundos;

        correrSegundos();
    }
}

function correrSegundos(){
    segundos++;
    if(segundos > 9){
        segundosTxt.textContent = segundos;
    } else if(milisegundos < 10){
        segundosTxt.textContent = '0' + segundos;
    }

    validarSegundos();
}

function validarSegundos(){
    if(segundos === 59){
        segundos = 0;
        segundosTxt.textContent = '0' + segundos;

        correrMinutos();
    }
}

function correrMinutos(){
    minutos++;
    if(minutos > 9){
        minutosTxt.textContent = minutos;
    } else if(minutos < 10){
        minutosTxt.textContent = '0' + minutos;
    }
}

function pausarCro(){
    clearInterval(intervalo);
}

function reiniciarCro(){
    milisegundos = 0;
    segundos = 0
    minutos = 0;
    milisegundosTxt.textContent = '0' + milisegundos;
    segundosTxt.textContent = '0' + segundos;
    minutosTxt.textContent = '0' + minutos;
}
