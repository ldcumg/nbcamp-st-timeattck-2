import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonlist, setMyPokemons }) => {
  const addPokemon = (target) => {
    setMyPokemons((prev) => [...prev, target]);
  };
  return (
    <ul>
      {pokemonlist.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onHandler={addPokemon}
            btn={true}
          />
        );
      })}
    </ul>
  );
};

export default PokemonList;
