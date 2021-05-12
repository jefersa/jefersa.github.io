const contador = () => {
    const fechaObjetivo =  new Date('July 9, 2021 00:00:00').getTime();
    const fechaActual = new Date();
    const diferencia = fechaObjetivo - fechaActual;
    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    document.querySelector('#dias').innerText = Math.floor(diferencia / dias);
    document.querySelector('#horas').innerText = Math.floor((diferencia % dias) / horas);
    document.querySelector('#minutos').innerText = Math.floor((diferencia % horas) / minutos);
    document.querySelector('#segundos').innerText = Math.floor((diferencia % minutos) / segundos);
}

setInterval(contador, 1000);    


