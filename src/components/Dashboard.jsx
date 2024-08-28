import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "../redux/slices/selectPokemonSlice";

const Dashboard = () => {
  const myPokemons = useSelector((state) => state.slectPokemon);
  const dispatch = useDispatch();

  const onRemovePokemon = (target) => {
    dispatch(removePokemon(target));
  };
  return (
    <ul>
      {myPokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onHandler={onRemovePokemon}
          />
        );
      })}
    </ul>
  );
};

export default Dashboard;
