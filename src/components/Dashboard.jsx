import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "../redux/slices/selectPokemonSlice";
import styled from "styled-components";

const Dashboard = () => {
  const myPokemons = useSelector((state) => state.slectPokemon);
  const dispatch = useDispatch();

  const onRemovePokemon = (target) => {
    dispatch(removePokemon(target));
  };
  return (
    <article>
      <h1>선택된 포켓몬</h1>
      <MyPokemonList>
        {myPokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onHandler={onRemovePokemon}
            />
          );
        })}
      </MyPokemonList>
    </article>
  );
};

export default Dashboard;

const MyPokemonList = styled.ul`
  display: flex;
  flex-direction: row;
`
