const equipos = document.querySelectorAll('.equipos');

equipos.forEach (equipo => {
    equipo.addEventListener('click', () => {
        removerClaseActiva();
        equipo.classList.add ('activa')
    })
})

function removerClaseActiva() {
    equipos.forEach(equipo => {
        equipo.classList.remove('activa')
    });
}