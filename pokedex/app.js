const colores = {
    fire: '#9d0208',
    grass: '#2b9348',
    water: '#03045e',
    electric: '#ffc300',
    ground: '#997b66',
    rock: '#432818',
    fairy: '#fad2e1',
    poison: '#be0aff',
    bug: '#aacc00',
    dragon: '#3c1642',
    phychic: '#ee4266',
    flying: '#778da9',
    fighting: '#720026',
    normal: '#ede7e3',
    ghost: '#662e9b',
    steel: '#33415c',
    ice: '#20bac5',
    dark: '#252422'

}

const tipoPrincipal = Object.keys(colores);


const contenedor = document.querySelector('#contenedor');
const numeroDePokemon = 898;

const esperarPokemon = async () => {
    for (let i = 1; i<= numeroDePokemon; i++){
        await obtenerPokemon(i);
    }
}

const obtenerPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const pokemon = await respuesta.json();
    crearCarta(pokemon);
    console.log(pokemon);
}

const crearCarta = (pokemon) => {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon');
    const tipoPokemon = pokemon.types.map(type => type.type.name);
    const tipo = tipoPrincipal.find(type => tipoPokemon.indexOf(type) > -1);
    const nombre = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colores [tipo];
    pokemonDiv.style.backgroundColor = color;
    const pokemonHTML = `
        <div class="imgContenedor">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
        </div>
        <div class="informacion">
        <span class="numeroPokemon">#${pokemon.id.toString().padStart(3, '0')}</span>
        <h3 class="nombrePokemon">${nombre}</h3>
        <p>Type: ${tipo}</p>
        </div>
    `;
    pokemonDiv.innerHTML = pokemonHTML;
    contenedor.appendChild(pokemonDiv);
}

esperarPokemon();

