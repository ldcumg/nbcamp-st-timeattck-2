import PokemonCard from "./PokemonCard";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/selectPokemonSlice";

const PokemonList = ({ pokemonlist }) => {
  const dispatch = useDispatch();
  const onAddPokemon = (target) => {
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
