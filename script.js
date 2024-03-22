// API documentation: https://pokeapi.co/docs/v2
const API_BASE_URL = 'https://pokeapi.co/api/v2';

async function getPokemonMove(name) {
// load pokemon data and return a string
  // goal: "the first move of 'bulbasaur' is 'razor-wind' and has accuracy 100"
  // 1. use `fetch` to load the details of a Pokémon by name (https://pokeapi.co/docs/v2#pokemon)
  // 2. deserialize the response object using its async `json()` method (https://devdocs.io/dom/response/json)
  // 3. optional: inspect the response structure by logging it to the console (don't forget to await promises before logging their contents)
  // 4. obtain the URL of the Pokémon's first move from the response
  // 5. use `fetch` to load the details of the first move (https://pokeapi.co/docs/v2#moves), deserialize the response as JSON
  // 6. combine data from the Pokémon's and the move's details to build the output string
  // 7. bonus: catch any error and log it to the console
}

async function printPokemonMove(name = 'clefairy') {
  console.log(await getPokemonMove(name));
}

printPokemonMove('bulbasaur');
