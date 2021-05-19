const btnMuestra = document.querySelector('#btnMostrar'),
      btnOculta = document.querySelector('#btnOcultar'),
      figura = document.querySelector('#cuadro');

btnMuestra.addEventListener('click', () => {
    figura.classList.remove('ocultar');
} )

btnOculta.addEventListener('click', () => {
    figura.classList.add('ocultar');
} )