import React from "react";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../pages/Dex";

const PokemonList = ({ pokemonlist }) => {
  const { setMyPokemons } = useContext(PokemonContext);
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
