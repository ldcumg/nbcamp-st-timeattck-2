import React from "react";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ myPokemons, setMyPokemons }) => {
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
