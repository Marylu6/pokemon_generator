export default function RandomPokemon() {
  const pokemonNum = Math.floor(Math.random() * 151) + 1;
  const pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNum}.png`;
  return (
    <div>
      <h1>Pokemon #{pokemonNum}</h1>
      <img className="pokemon-image" src={pokeUrl} alt="Pokemon" />
    </div>
  );
}
