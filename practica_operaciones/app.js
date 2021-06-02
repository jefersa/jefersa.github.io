let numero = 0:
let resultado = document.querySelector('#resultado');



const restarNumero = () => {
    numero--;
}

const sumarNumero = () => {
    numero++; 
}


const resultado = () => {
    resultado.innerHTML = numero;
}

mostrarResultado();

