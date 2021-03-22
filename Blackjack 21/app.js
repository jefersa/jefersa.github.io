let baraja = [];
    palos = ['S','C','D','H'],
    figuras = ['J','Q','K','A'],
    puntosJugador = 0,
    puntosPC = 0;

const btnNuevo = document.querySelector('#btnNuevo'),
      btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnSalir = document.querySelector('#btnSalir'),
      btnCambiar = document.querySelector('#btnCambiar'),
      resultados = document.querySelectorAll('span'),
      cartaJugador = document.querySelector('#cartas-jugador'),
      cartaPC = document.querySelector('#cartas-pc');

const crearBaraja = () => {
    baraja = [];
    for (let i = 2; i <= 10; i++){
        for(let palosDeCartas of palos){
            baraja.push(i + palosDeCartas);
        }
    }
    for (let figurasDeCartas of figuras){
        for(let palosDeCartas of palos){
            baraja.push(figurasDeCartas+palosDeCartas);
        }
    }
    baraja = _.shuffle(baraja);
}
const pedirCarta = () => {
    return baraja.length == 0 ? alert ('No hay más cartas') : baraja.pop();
}
const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length -1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 :valor * 1;
}
const turnoPC = (puntosJugador) => {
    do { 
    const carta = pedirCarta();
    puntosPC = puntosPC + valorCarta(carta);
    resultados[1].innerText = puntosPC;
    const imgCarta = document.createElement('img');
    imgCarta.src = `cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    cartaPC.append(imgCarta);   
    if (puntosJugador > 21){
            break;
        }
    } while ( puntosPC < puntosJugador && puntosJugador <= 21);
    setTimeout(()=> {
        if (puntosJugador === puntosPC) {
            alert('Empate');
        }else if (puntosJugador > 21){
            alert('La computadora gana');
        }else if (puntosPC > 21){
            alert('Ganaste');
        }else{
            alert('La computadora gana');
        }
    } , 1000); 
}   
btnNuevo.disabled = false;
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    resultados[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = 'cartas/'+carta+'.png';
    imgCarta.classList.add('carta')
    cartaJugador.append(imgCarta);
    if (puntosJugador > 21){
        alert('Perdiste');
        turnoPC(puntosJugador);
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }else if(puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        alert('Sacaste 21');
        turnoPC(puntosJugador);
    }
})
btnNuevo.addEventListener('click', () => {
    if (baraja.length === 0){
        crearBaraja();
        alert('Se ha creado una baraja');
    }
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    puntosJugador = 0;
    puntosPC = 0;
    resultados[0].innerText = 0;
    resultados[1].innerText = 0;
    cartaJugador.innerHTML = '';
    cartaPC.innerHTML = '';
})
btnDetener.addEventListener ('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoPC(puntosJugador);
})





