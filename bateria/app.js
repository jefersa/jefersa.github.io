let numeroBotones = document.querySelectorAll('#boton').length;

for(let i=0; i<numeroBotones; i++){
    document.querySelectorAll('#boton')[i].addEventListener('click', function() {
        let tecla=this.innerHTML;
        reproducirSonido(tecla);
    })
}

document.addEventListener('keypress', function(event) {
    reproducirSonido(event.key);
})

const reproducirSonido=(tecla)=>{
    switch (tecla) {
        case 'a':
            var sonido = new Audio('sonidos/crash.mp3');
            sonido.play();
            break;
        case 's':
            var sonido = new Audio('sonidos/kick-bass.mp3');
            sonido.play();
            break;
        case 'd':
            var sonido = new Audio('sonidos/snare.mp3');
            sonido.play();
            break;
        case 'f':
            var sonido = new Audio('sonidos/tom-1.mp3');
            sonido.play();
            break;
        case 'g':
            var sonido = new Audio('sonidos/tom-2.mp3');
            sonido.play();
            break;
        case 'h':
            var sonido = new Audio('sonidos/tom-3.mp3');
            sonido.play();
            break;
        case 'j':
            var sonido = new Audio('sonidos/tom-4.mp3');
            sonido.play();
            break;
        default:
            break;
    }
}