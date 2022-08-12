// API documentation: https://pokeapi.co/docs/v2
const API_BASE_URL = 'https://pokeapi.co/api/v2';

async function getPokemonMove(name) {
  // use `fetch` to load pokemon data and return a string
  // goal: "the first move of 'bulbasaur' is 'razor-wind' and has accuracy 100"
}

async function printPokemonMove(name = 'clefairy') {
  console.log(await getPokemonMove(name));
}

printPokemonMove('bulbasaur');
