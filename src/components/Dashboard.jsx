import React from "react";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../pages/Dex";

const Dashboard = () => {
  const { myPokemons, setMyPokemons } = useContext(PokemonContext);
  const removePokemon = (target) => {
    setMyPokemons(myPokemons.filter((pokemon) => pokemon.id !== target.id));
  };
  return (
    <ul>
      {myPokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onHandler={removePokemon}
          />
        );
      })}
    </ul>
  );
};

export default Dashboard;
