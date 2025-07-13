import { useFetchCharacter } from './hooks/useFetchCharacters'
import './App.css';
import Personaje from './components/Personaje';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const {character: pokemon, isLoading: loadingPokemon} =useFetchCharacter(urlPokemon)
  const {character: rick, isLoading: loadingRick} =useFetchCharacter(urlRick)

  return (
    <>
    {loadingPokemon ? <p>Loading...</p> :
    <Personaje
      titulo="Personaje Pokemon"
      nombre={pokemon.name}
      imagen={pokemon.sprites.front_default}/>
    }
    {loadingRick ? <p>Loading...</p> :
    <Personaje
      titulo="Personaje rick"
      nombre={rick.name}
      imagen={rick.image}/>
    }
    </>
  )}

export default App;
