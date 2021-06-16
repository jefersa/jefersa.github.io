const sumar = document.querySelector('#sumar');
const restar = document.querySelector('#restar');
const resultado = document.querySelector('#resultado');

let conteo = 0;

const restarNumero = () => {
    --conteo;  
}

const sumarNumero = () => {
    conteo++;      
}

const mostrarConteo = () => {
    resultado.innerText = conteo;
}


restar.addEventListener('click', () => {
    restarNumero();
    mostrarConteo();
});

sumar.addEventListener('click', () => {
    sumarNumero();
    mostrarConteo();
});


document.addEventListener('keypress', function(event) {
    event.key == '+' ? sumarNumero() :
    event.key == '-' ? restarNumero() : ''
})



mostrarConteo();



