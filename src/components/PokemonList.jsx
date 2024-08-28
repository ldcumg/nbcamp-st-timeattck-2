import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../redux/slices/selectPokemonSlice";

const PokemonList = ({ pokemonlist }) => {
  const dispatch = useDispatch();
  const selectedPokemons = useSelector((state) => state.slectPokemon);
  const onAddPokemon = (target) => {
    if (selectedPokemons.includes(target)) {
      alert("이미 존재하는 포켓몬");
      return;
    }
    if (selectedPokemons.length >= 6) {
      alert("최대 6마리까지");
      return;
    }
    dispatch(addPokemon(target));
  };
  return (
    <ul>
      {pokemonlist.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onHandler={onAddPokemon}
            btn={true}
          />
        );
      })}
    </ul>
  );
};

export default PokemonList;
