import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { createContext } from "react";

export const PokemonContext = createContext();
const Dex = () => {
  const [myPokemons, setMyPokemons] = useState([]);

  return (
    <PokemonContext.Provider value={(myPokemons, setMyPokemons)}>
      <Dashboard myPokemons={myPokemons} setMyPokemons={setMyPokemons} />
      <PokemonList setMyPokemons={setMyPokemons} pokemonlist={MOCK_DATA} />
    </PokemonContext.Provider>
  );
};

export default Dex;
